import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { IParcelElem } from "../types";
import { getNumberOfItemsFromParcel, usePickUpDateString } from "../utils/parcels";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

const CentralInfo = styled.div`
    flex: 1;
`

const Title = styled.p`
    font-weight: bold;
    font-size: 18px;
    color: #534F5A;
`

const Description = styled.p`
    font-size: 12px;
    color: #534F5A;
`

const Date = styled.p`
    font-weight: bold;
    color: red;
    font-size: 12px;
`

export const ParcelItem = (props: IParcelElem) => {
    const {date, carriers} = props
    const [t, i18n] = useTranslation()
    return (
        <Wrapper>
            <CentralInfo>
                <Title>{t("parcel_list")} {date ? date.toLocaleDateString(i18n.language) : null}</Title>
                { 
                    carriers && date ? 
                    <Description>
                        {usePickUpDateString(carriers, date)} 
                    </Description> 
                    : null
                }
                <Description>{t("items", { items_number: getNumberOfItemsFromParcel(props)})}</Description>
            </CentralInfo>
            {date ? <Date>{date.toLocaleDateString(i18n.language)}</Date> : null}
        </Wrapper>
    )
}