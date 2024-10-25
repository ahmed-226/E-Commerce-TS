export const productValidation = (product: {title: string, price: string, description: string, imageURL: string}) => {
    const errors:{title:string,price: string, description: string, imageURL: string}={
        title: '',
        price: '',
        description: '',
        imageURL: ''
    }

    const validateUrl=/^(ftp|http|https):\/\/[^ "]+$/.test(product.imageURL)

    if (!product.title.trim() || product.title.length < 5 || product.title.length > 50) {
        errors.title = 'Title is required and should be between 5 and 50 characters'
    }
    if (!product.description.trim() || product.description.length < 15 || product.description.length > 500) {
        errors.description = 'Description is required and should be between 15 and 500 characters'
    }
    if (!product.imageURL.trim() || !validateUrl) {
        errors.imageURL = 'Image URL is required and should be a valid URL'
    }
    if (!product.price.trim() || isNaN(Number(product.price))) {
        errors.price = 'Price is required and should be a number'
    }
    return errors
}