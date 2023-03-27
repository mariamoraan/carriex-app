import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { IParcelElem } from "../types";
import { getNumberOfItemsFromParcel, useDateLocaleString, usePickUpDateString } from "../utils/parcels";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

const CentralInfo = styled.div`
    flex: 1;
`

const Title = styled.p`
    font-size: 18px;
    color: #534F5A;
`

const Description = styled.p`
    font-size: 12px;
    color: #534F5A;
`

const Date = styled.p`
    color: red;
    font-size: 12px;
`

export const ParcelItem = (props: IParcelElem) => {
    const {date, carriers} = props
    const [t] = useTranslation()
    return (
        <Wrapper>
            <CentralInfo>
                <Title>{t("parcel_list")} {date ? useDateLocaleString(date) : null}</Title>
                { 
                    carriers && date ? 
                    <Description>
                        {usePickUpDateString(carriers, date)} 
                    </Description> 
                    : null
                }
                <Description>{t("items", { items_number: getNumberOfItemsFromParcel(props)})}</Description>
            </CentralInfo>
            {date ? <Date>{useDateLocaleString(date)}</Date> : null}
        </Wrapper>
    )
}