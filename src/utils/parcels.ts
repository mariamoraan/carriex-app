import { useTranslation } from "react-i18next";

export const usePickUpDateString = (itemsNumber: number, date: string): string => {
    const [t, i18n] = useTranslation()
    let parsedDate = new Date(date)
    let stringDate = parsedDate.toLocaleDateString(i18n.language)
    let currentDate = new Date()
    if(itemsNumber > 1) {
        if (stringDate == currentDate.toLocaleDateString(i18n.language)) {
            return (`${t("carriers_will_pick_up", {items_number: itemsNumber})} today`)
        }
        if (parsedDate < currentDate ) {
            return (`${t("carriers_picked_up", {items_number: itemsNumber})} ${t("on_date")} ${stringDate}`)
        }
    } else {
        if (stringDate == currentDate.toLocaleDateString(i18n.language)) {
            return (`${t("carrier_will_pick_up", {items_number: itemsNumber})} today`)
        }
        if (parsedDate < currentDate ) {
            return (`${t("carrier_picked_up", {items_number: itemsNumber})} ${t("on_date")} ${stringDate}`)
        }
    }
    return (`${t("carriers_will_pick_up", {items_number: itemsNumber})} ${t("on_date")} ${stringDate}`)
}

export const useDateLocaleString = (stringDate: string): string => {
    const [, i18n] = useTranslation()
    let date = new Date(stringDate)
    if (isNaN(date.getDate())) return ""
    return date.toLocaleDateString(i18n.language)    
}