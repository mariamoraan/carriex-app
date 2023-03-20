export interface IParcel {[key: string]: {
    key: string,
    date: Date,
    orders: IOrder,
    carriers?: number,
}}

export interface IParcelElem {
    key: string,
    date?: Date,
    orders: IOrder,
    carriers?: number,
}

export interface IOrder {[key: string]: {
    id: string,
    company: string,
    isDelivered: boolean,
    products: IProduct,
}}

export interface IOrderElem {
    id: string,
    company: string,
    isDelivered: boolean,
    products: IProduct,
}
export interface IProduct {[key: string]: {
    id: string,
    title: string, 
    weight: string,
    icon?: JSX.Element,
}}

export interface IProductElem {
    id: string,
    title: string, 
    weight: string,
    icon?: JSX.Element,
}