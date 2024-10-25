import { ChangeEvent, FormEvent, useState } from "react"
import ProductCard from "./components/ProductCard"
import Modal from "./components/UI/Modal"
import { formInputsList, productList } from "./data"
// import { Button } from "@headlessui/react"
import Input from "./components/UI/Input"
import Button from "./components/UI/Button"
import { IProduct } from "./interfaces"
import { productValidation } from "./validation"
import ErrorMsg from "./components/UI/ErrorMsg"

function App() {

  const defultProduct={
    title: '',
    price: '',
    description: '',
    imageURL: '',
    colors:[],
    category: {
      name: '',
      imageURL: ''
    },
  }

  /* -------------------- state -------------------- */
  const [isOpen, setIsOpen] = useState(true)
  const [errors, setErrors] = useState({title:'', price:'', description:'', imageURL:''})
  const  [product, setProduct]= useState<IProduct>(defultProduct)

  /* -------------------- handler -------------------- */

  const  closeModal=()=> {  setIsOpen(false)  }
  const  openModal=() =>{ setIsOpen(true)  }
  const onChangeHandle=(event:ChangeEvent<HTMLInputElement>) => { 
    const {name, value} = event.target
    setProduct({...product, [name]: value})
    setErrors({...errors, [name]: ''})
  }
  const cancelHandle=()=> {
    setProduct(defultProduct);
    closeModal();
  }


  const  submitHandle=(event: FormEvent<HTMLFormElement>): void =>{
    event.preventDefault();
    const errors=productValidation({
      title:product.title,
      description:product.description,
      price:product.price,
      imageURL:product.imageURL
    })

    const hasErrros=Object.values(errors).some(value=>value==='') && Object.values(errors).every(value=>value==='')
    if (!hasErrros) {
      setErrors(errors);
      return;
    } 

    console.log('product send to server');
    
    setProduct(defultProduct);

  }
  
  


  const renderList = productList.map(product => (
    <ProductCard key={product.id} product={product} />
  ))
  const renderFormList = formInputsList.map(input => (
    <div className="flex flex-col" key={input.id} >
      <label className="text-sm text-gray-600" htmlFor={input.id}>{input.label}</label>
      <Input id={input.id} name={input.name}  type={input.type} value={product[input.name]} onChange={onChangeHandle} />
      <ErrorMsg msg={errors[input.name]}/>  
    </div>
  ))

  

  return (
    <main className="container ">
      <Button className={' w-full rounded-md text-white p-2 bg-indigo-700 hover:bg-indigo-900 '} onClick={openModal} >Add</Button>
      <div className=" m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md ">
        {renderList}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} >
        <form className="space-y-3" onSubmit={submitHandle}>
        {renderFormList}
        <div className='flex items-center space-x-3 mt-5 '>
          <Button className="bg-indigo-500  w-full rounded-md text-white p-2 hover:bg-indigo-700" >Submit</Button>
          <Button className="bg-gray-500  w-full rounded-md text-white p-2 hover:bg-gray-700" onClick={cancelHandle}>Cancel</Button>
        </div>
        </form>
      </Modal>
    </main>
  )
}

export default App
