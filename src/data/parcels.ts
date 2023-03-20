import { ICONS } from "../components/Icons";
import { IParcel } from "../types";

export const PARCELS: IParcel[] = [
    {
        key: "DWSAZFCEDSFDESZFE",
        title: "Parcel List 02/11/2022", 
        description: "4 carriers will pick up the parcel today", 
        description2: "14 items",
        date: "02/11/2022",
        orders: [
            {
                key: "EDFDSFCSEFDESF",
                title: "string",
                company: "string",
                description: "string",
                delivery: true,
                products: [
                    {key: "EDSFASLEDFKASEF", title: "FSDACSASDCS", weight: "100g", icon: ICONS.COMPUTER_ICON},
                    {key: "VTRETVRTRVVTETV", title: "FSDACSASDCS", weight: "100g", icon: ICONS.PHONE_ICON}
                ]
            },
            {
                key: "BHTGHBTRHDT",
                title: "string",
                company: "string",
                description: "string",
                delivery: true,
                products: [
                    {key: "RFGRFGFRGRGVRFDG", title: "FSDACSASDCS", weight: "100g", icon: ICONS.COMPUTER_ICON},
                    {key: "HTHDTFHDHTDTHBTDTH", title: "FSDACSASDCS", weight: "100g", icon: ICONS.PHONE_ICON}
                ]
            },
        ]
    },
]