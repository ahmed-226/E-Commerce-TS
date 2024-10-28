import { IProduct } from "../interfaces"
import { txtSlider } from "../utils/txtSlicer";
import Button from "./UI/Button"
import Image from "./Image"
import CircleColor from "./CircleColor";


interface IProps {
    product: IProduct;
    setProductToEdit: (product: IProduct) => void;
    openEditModal: () => void;
}


const ProductCard = ({ product,setProductToEdit ,openEditModal}: IProps) => {

    /* --------------------states -------------------- */
    const { title, description, imageURL, price, colors,category } = product;
    
    /* -------------------- renders -------------------- */
    
    const renderColors = colors.map(color => (
        <CircleColor
        key={color}
        color={color}
        />
    ))
    /* -------------------- handlers -------------------- */

    const onEdit = () => {
        setProductToEdit(product)
        console.log(product)
    }


    return (
        <div className="border max-w-sm md:min-w-lg mx-auto md:mx-0 rounded-md p-2 flex flex-col justify-around">

            <Image className="rounded-md h-48 w-full mb-3 object-center" imageUrl={imageURL} alt="ferarri" />

            <h1 className="text-xl font-bold">{title}</h1>
            <p className="text-gray-600">{txtSlider(description, 25)}</p>
            <div className="flex justify-start mt-3 space-x-1">
                
                        
            <div className="flex space-x-2 ">
            {renderColors}
            </div>
                   
            </div>
            <div className="my-3 flex justify-between items-center">
                <h1 className="text-xl font-bold">{price}$</h1>
                <Image className="rounded-full h-10 w-10 object-center" key={category.name} imageUrl={category.imageURL} alt="ferarri" />
            </div>
            <div className="flex justify-between items-center space-x-2 ">
                <Button className="bg-blue-500" onClick={() => console.log('clicked')}>Buy</Button>
                <Button className="bg-red-500" onClick={openEditModal}>Edit</Button>
            </div>

        </div>
    )
}

export default ProductCard