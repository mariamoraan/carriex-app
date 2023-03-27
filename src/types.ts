export type IParcels = IParcel[]

export interface IParcel {
    id: {"$oid": string},
    deliveryAdress: string,
    deliveryDate: string,
    pickupAdress: string,
    pickupDate: string,
    itemsCount: number,
    items: {"$oid": string}[],
    carrier?: string,
    driverSignature?: string,
    isDelivered?: boolean,
}

export type ICarriers = ICarrier[]

export interface ICarrier {
    id:{"$oid":string},
    companyName:string,
    driver:string,
    licensePlate:string, 
    centerAdress:string,
}


export type IItems = IItem[]

export interface IItem  {
    id: {"$oid": string},
    type: string,
    model:string,
    price: number,
    weigth: number
}
