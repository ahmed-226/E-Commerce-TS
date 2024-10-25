import { ChangeEvent, useState } from "react"
import ProductCard from "./components/ProductCard"
import Modal from "./components/UI/Modal"
import { formInputsList, productList } from "./data"
// import { Button } from "@headlessui/react"
import Input from "./components/UI/Input"
import Button from "./components/UI/Button"
import { IProduct } from "./interfaces"

function App() {

  /* -------------------- state -------------------- */
  let [isOpen, setIsOpen] = useState(true)
  let [product, setProduct]= useState<IProduct>({
    title: '',
    price: '',
    description: '',
    imageURL: '',
    colors:[],
    category: {
      name: '',
      imageURL: ''
    },
  })

  /* -------------------- handler -------------------- */

  const  closeModal=()=> {  setIsOpen(false)  }
  const  openModal=() =>{ setIsOpen(true)  }
  const onChangeHandle=(event:ChangeEvent<HTMLInputElement>) => { 
    const {name, value} = event.target
    setProduct({...product, [name]: value})
  }



  const renderList = productList.map(product => (
    <ProductCard key={product.id} product={product} />
  ))
  const renderFormList = formInputsList.map(input => (
    <div className="flex flex-col" >
      <label className="text-sm text-gray-600" htmlFor={input.id}>{input.label}</label>
      <Input id={input.id}  type={input.type} value={""} onChange={onChangeHandle} />
    </div>
  ))

  return (
    <main className="container ">
      <Button className={' w-full rounded-md text-white p-2 bg-indigo-700 hover:bg-indigo-900 '} onClick={openModal} >Add</Button>
      <div className=" m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md ">
        {renderList}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} >
        <form className="space-y-3">
        {renderFormList}
        <div className='flex items-center space-x-3 mt-5 '>
          <Button className="bg-indigo-500  w-full rounded-md text-white p-2 hover:bg-indigo-700" >Submit</Button>
          <Button className="bg-gray-500  w-full rounded-md text-white p-2 hover:bg-gray-700">Cancel</Button>
        </div>
        </form>
      </Modal>
    </main>
  )
}

export default App
