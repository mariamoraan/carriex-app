export type ListItemProps = {
    key: string,
    title: string,
    description: string,
    description2?: string,
    isDelivered?: boolean,
    icon?: JSX.Element,
    date?: string
}

export interface IParcel {
    key: string,
    title: string, 
    description: string, 
    description2?: string,
    date: string,
    orders: IOrder[],
}

export interface IOrder {
    key: string,
    title: string,
    company: string,
    description: string,
    delivery: boolean,
    products: IProduct[],
}

export interface IProduct {
    key: string,
    title: string, 
    weight: string,
    icon?: JSX.Element,
}