import Image from "./Image"

interface IProps {

}

const ProductCard = ({}:IProps) => {
  return (
    <div className="border rounded-md p-2 flex flex-col">

        <Image className="rounded-md h-48  object-center" imageUrl="https://cdn.ferrari.com/cms/network/media/img/resize/6195238ab3c7ea5975d9077d-f150bdcoverthree1300x730pg" alt="ferarri"/>

        <div className="flex flex-col p-2 mt-2">
            <h1 className="text-xl font-bold">Ferrari</h1>
            <p className="text-gray-600">The Ferrari 812 Superfast is a front mid-engine, rear-wheel-drive grand tourer produced by Italian sports car manufacturer.</p>
            <div className="flex justify-start mt-3 space-x-1">
                <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer"/>
                <span className="w-5 h-5 bg-red-600 rounded-full cursor-pointer"/>
                <span className="w-5 h-5 bg-orange-600 rounded-full cursor-pointer"/>
            </div>
            <div className="my-3 flex justify-between items-center">
                <h1 className="text-xl font-bold">$300,000</h1>
                <Image className="rounded-full h-10 w-10 object-center" imageUrl="https://cdn.ferrari.com/cms/network/media/img/resize/6195238ab3c7ea5975d9077d-f150bdcoverthree1300x730pg" alt="ferarri"/>
            </div>
            <div className="flex justify-between items-center space-x-2 ">
                <button className="bg-blue-500 text-white px-4 py-1 rounded-md flex-1">Buy</button>
                <button className="bg-red-500 text-white px-4 py-1 rounded-md flex-1">Buy</button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard