import { ICONS } from "../components/Icons";
import { IParcel } from "../types";


export const PARCELS: IParcel = {
    DWSAZFCEDSFDESZFE: {
        key: "DWSAZFCEDSFDESZFE",
        carriers: 5,
        date: new Date('03/20/2021'),
        orders: {
            SK16812356 : {
                id: "SK16812356",
                company: "Seur",
                isDelivered: true,
                products: {
                    EDSFASLEDFKASEF: {id: "EDSFASLEDFKASEF", title: "FSDACSASDCS", weight: "100g", icon: ICONS.COMPUTER_ICON},
                    HTHDTFHDHTDTHBTDTH: {id: "HTHDTFHDHTDTHBTDTH", title: "FSDACSASDCS", weight: "100g", icon: ICONS.PHONE_ICON}
                }
            },
            GFRGDFGVDF : {
                id: "GFRGDFGVDF",
                company: "Seur",
                isDelivered: true,
                products: {
                    EDSFASLEDFKASEF: {id: "EDSFASLEDFKASEF", title: "FSDACSASDCS", weight: "100g", icon: ICONS.COMPUTER_ICON},
                    HTHDTFHDHTDTHBTDTH: {id: "HTHDTFHDHTDTHBTDTH", title: "FSDACSASDCS", weight: "100g", icon: ICONS.PHONE_ICON}
                }
            }
        }
    }
}
