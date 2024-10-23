import { useState } from "react"
import ProductCard from "./components/ProductCard"
import Modal from "./components/UI/Modal"
import { productList } from "./data"
import { Button } from "@headlessui/react"

function App() {

  /* -------------------- state -------------------- */
  let [isOpen, setIsOpen] = useState(true)

  /* -------------------- handler -------------------- */

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const renderList = productList.map(product => (
    <ProductCard key={product.id} product={product} />
  ))

  return (
    <main className="container ">
      <Button className={' w-full rounded-md text-white p-2 bg-indigo-700 hover:bg-indigo-900 '} onClick={openModal} >Add</Button>
      <div className=" m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md ">
        {renderList}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} >
        <div className='flex items-center space-x-3 '>
          <Button className="bg-indigo-500  w-full rounded-md text-white p-2 hover:bg-indigo-700" >Submit</Button>
          <Button className="bg-gray-500  w-full rounded-md text-white p-2 hover:bg-gray-700">Cancel</Button>
        </div>
      </Modal>
    </main>
  )
}

export default App
