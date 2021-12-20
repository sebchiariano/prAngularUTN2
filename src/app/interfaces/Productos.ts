export interface Producto {
    _id:                string;
    title:              string;
    price:              number;
    description:        string;
    warranty:           string;
    available_quantity: number;
    pictures:           Picture[];
    __v:                number;
}

export interface Picture {
    _id:        string;
    secure_url: string;
}
