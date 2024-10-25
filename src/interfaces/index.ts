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
    name: string;
    label: string;
    type: string;
}