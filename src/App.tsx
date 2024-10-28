import { ChangeEvent, FormEvent, useState } from "react"
import ProductCard from "./components/ProductCard"
import Modal from "./components/UI/Modal"
import { categories, colorsList, formInputsList, productList } from "./data"
// import { Button } from "@headlessui/react"
import Input from "./components/UI/Input"
import Button from "./components/UI/Button"
import { IProduct } from "./interfaces"
import { productValidation } from "./validation"
import ErrorMsg from "./components/ErrorMsg"
import CircleColor from "./components/CircleColor"
import { v4 as uuid } from "uuid";
import SelectMenu from "./components/UI/SelectMenu"

function App() {

  const defultProduct = {
    title: '',
    price: '',
    description: '',
    imageURL: '',
    colors: [],
    category: {
      name: '',
      imageURL: ''
    },
  }

  /* -------------------- state -------------------- */
  const [isOpen, setIsOpen] = useState(true)
  const [isOpenEdit, setIsOpenEdit] = useState(false)
  const [products, setProducts] = useState<IProduct[]>(productList)
  const [errors, setErrors] = useState({ title: '', price: '', description: '', imageURL: '' })
  const [product, setProduct] = useState<IProduct>(defultProduct)
  const [tempColors, setTempColors] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState(categories[0])
  const [productToEdit, setProductToEdit] = useState<IProduct>(defultProduct)
  /* -------------------- handler -------------------- */

  const closeModal = () => { setIsOpen(false) }
  const openModal = () => { 
    setErrors({ title: '', price: '', description: '', imageURL: '' });
    setIsOpen(true)
  }
  const closeEditModal = () => { setIsOpenEdit(false) }
  const openEditModal = () => { 
    setErrors({ title: '', price: '', description: '', imageURL: '' });
    setIsOpenEdit(true)
  }
  const onChangeHandle = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setProduct({ ...product, [name]: value })
    setErrors({ ...errors, [name]: '' })
  }
  const cancelHandle = () => {
    setProduct(defultProduct);
    console.log('cancel');
    
    closeModal();
  }
  const cancelEditHandle = () => {
    
    closeEditModal();
  }


  const submitHandle = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const errors = productValidation({
      title: product.title,
      description: product.description,
      price: product.price,
      imageURL: product.imageURL
    })

    const hasErrros = Object.values(errors).some(value => value === '') && Object.values(errors).every(value => value === '')
    if (!hasErrros) {
      setErrors(errors);
      return;
    }

    console.log('product send to server');
    setProducts([ { ...product, id:uuid(),colors: tempColors ,category:selectedCategory},...products]);
    setProduct(defultProduct);
    setTempColors([]);
    closeModal();

  }


  /* -------------------- rendering -------------------- */

  const renderList = products.map(product => (
    <ProductCard key={product.id} product={product} setProductToEdit={setProductToEdit} openEditModal={openEditModal}/>
  ))
  const renderFormList = formInputsList.map(input => (
    <div className="flex flex-col" key={input.id} >
      <label className="text-sm text-gray-600" htmlFor={input.id}>{input.label}</label>
      <Input id={input.id} name={input.name} type={input.type} value={product[input.name]} onChange={onChangeHandle} />
      <ErrorMsg msg={errors[input.name]} />
    </div>
  ))
  const renderColors = colorsList.map(color => (
    <CircleColor
      key={color}
      color={color}
      onClick={() => {
        if (tempColors.includes(color)) {
          setTempColors(tempColors.filter((c) => c !== color))
        } else {
          setTempColors([...tempColors, color])
        }
      }}
    />
  ))


  return (
    <main className="container">
      <div className="flex justify-between items-center mt-10 mb-5 font-bold">
        <h1 className="xl:text-[70px] lg:text-[60px] md:text-[50px]"><span className="text-indigo-700">Latest</span>  Product</h1>
        <Button className="w-[300px] h-[50px] rounded-md m-5 text-white p-2 bg-indigo-700 hover:bg-indigo-900" onClick={openModal}>Add</Button>
      </div>
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
        {renderList}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <form className="space-y-3" onSubmit={submitHandle}>
          {renderFormList}
          <div className="flex space-x-2 ">
            {renderColors}
          </div>
          {tempColors.length > 0 ? <div className="flex flex-wrap">
            {tempColors.map((color) => (
              <span key={color} className="p-1 text-white m-1 text-sm rounded-md" style={{ backgroundColor: color }}>{color}</span>
            ))}
          </div> : null}
          <SelectMenu selected={selectedCategory} setSelected={setSelectedCategory} />
          <div className="flex items-center space-x-3 mt-5">
            <Button className="bg-indigo-500 w-full rounded-md text-white p-2 hover:bg-indigo-700">Submit</Button>
            <Button className="bg-gray-500 w-full rounded-md text-white p-2 hover:bg-gray-700" onClick={cancelHandle}>Cancel</Button>
          </div>
        </form>
      </Modal>

      {/*-------------------- Edit Modal -------------------- */}
      <Modal title="Edit product" isOpen={isOpenEdit} closeModal={() => closeEditModal}>
        <form className="space-y-3" onSubmit={submitHandle}>
          {renderFormList}
          <div className="flex space-x-2 ">
            {renderColors}
          </div>
          {tempColors.length > 0 ? <div className="flex flex-wrap">
            {productToEdit.colors.map((color) => (
              <span key={color} className="p-1 text-white m-1 text-sm rounded-md" style={{ backgroundColor: color }}>{color}</span>
            ))}
          </div> : null}
          <SelectMenu selected={selectedCategory} setSelected={setSelectedCategory} />
          <div className="flex items-center space-x-3 mt-5">
            <Button className="bg-indigo-500 w-full rounded-md text-white p-2 hover:bg-indigo-700">Submit</Button>
            <Button className="bg-gray-500 w-full rounded-md text-white p-2 hover:bg-gray-700" onClick={cancelEditHandle}>Cancel</Button>
          </div>
        </form>
      </Modal>
    </main>
  );
}

export default App
