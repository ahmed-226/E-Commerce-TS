export interface IProduct {
    id?: string;
    title: string;
    description: string;
    imageURL: string;
    price: string;
    colors: string[];
    category: {
      name: string;
      imageURL: string;
    };
  }


export interface IFromInput {
    id: string;
    name: "title" | "price" | "description" | "imageURL" ;
    label: string;
    type: string;
}