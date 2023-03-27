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

export const useDateLocaleString = (stringDate: string): string => {
    const [, i18n] = useTranslation()
    let date = new Date(JSON.parse(stringDate))
    return date.toLocaleDateString(i18n.language)
}

export const usePickUpDateString = (itemsNumber: number, date: string): string => {
    const [t, i18n] = useTranslation()
    let parsedDate = new Date(date)
    let stringDate = parsedDate.toLocaleDateString(i18n.language)
    let currentDate = new Date()
    if (stringDate == currentDate.toLocaleDateString(i18n.language)) {
        return (`${t("carriers_will_pick_up", {items_number: itemsNumber})} today`)
    }
    if (parsedDate < currentDate ) {
        return (`${t("carriers_picked_up", {items_number: itemsNumber})} ${t("on_date")} ${stringDate}`)
    }
    return (`${t("carriers_will_pick_up", {items_number: itemsNumber})} ${t("on_date")} ${stringDate}`)
}