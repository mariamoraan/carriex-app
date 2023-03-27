import { useTranslation } from "react-i18next";

export const getWeightWithUnits = (weight: number): string => {
    const [t] = useTranslation()
    if (weight < 1000) return `${weight}${t("G_UNIT")}`
    return `${weight/1000}${t("KG_UNIT")}`
}