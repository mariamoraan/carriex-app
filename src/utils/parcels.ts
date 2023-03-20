import { useTranslation } from "react-i18next";
import { IOrderElem, IParcelElem } from "../types";

export const getNumberOfItemsFromParcel = (parcel: IParcelElem): number => {
    return Object.values(parcel.orders).reduce((prev, next) => {
        return prev + Object.keys(next.products).length
    }, 0)
}

export const getNumberOfItemsFromOrder = (order: IOrderElem): number => {
    return Object.values(order.products).length || 0
}

export const usePickUpDateString = (itemsNumber: number, date: Date): string => {
    const [t, i18n] = useTranslation()
    let stringDate = date.toLocaleDateString(i18n.language)
    let currentDate = new Date()
    if (stringDate == currentDate.toLocaleDateString(i18n.language)) {
        return (`${t("carriers_will_pick_up", {items_number: itemsNumber})} today`)
    }
    if (date < currentDate ) {
        return (`${t("carriers_picked_up", {items_number: itemsNumber})} ${t("on_date")} ${stringDate}`)
    }
    return (`${t("carriers_will_pick_up", {items_number: itemsNumber})} ${t("on_date")} ${stringDate}`)
}