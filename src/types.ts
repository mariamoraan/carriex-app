export interface IParcel {[key: string]: IParcelElem}

export interface IParcelElem {
    key: string,
    date?: string,
    orders: IOrder,
    carriers?: number,
}

export interface IParcelElemA {
    id: {"$oid": string},
    deliveryAdress: string,
    deliveryDate: string,
    pickupAdress: string,
    pickupDate: string,
    itemsCount: number,
    items: {"$oid": string}[]
}

export interface IOrder {[key: string]: IOrderElem}

export interface IOrderElem {
    id: string,
    company: string,
    isDelivered: boolean,
    products: IProduct,
    driverName?: string,
    driverLicensePlate?: string,
}
export interface IProduct {[key: string]: IProductElem}

export interface IProductElem {
    id: string,
    title: string, 
    weight: string,
    icon?: string,
}