import { useTranslation } from "react-i18next";
import { PRODUCT_TYPES } from "../constants/products";

export const getItemUnits = (type: string) => {
    const [t] = useTranslation()
    switch(type) {
        case PRODUCT_TYPES.TELEVISION_ICON:
            return t("KG_UNIT")
        default:
            return t("G_UNIT")
    }
}