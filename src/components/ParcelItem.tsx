import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { IParcel } from "../types";
import { useDateLocaleString, usePickUpDateString } from "../utils/parcels";

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

export const ParcelItem = (props: IParcel) => {
    const {deliveryDate, itemsCount, pickupDate, carrier} = props
    const [t] = useTranslation()
    return (
        <Wrapper>
            <CentralInfo>
                <Title>{t("parcel_list")} {useDateLocaleString(pickupDate)}</Title>
                {carrier ? <Description>{usePickUpDateString(1, pickupDate)}</Description> : null}
                <Description>{t(`${itemsCount > 1 ? "items" : "item"}`, { items_number: itemsCount})}</Description>
            </CentralInfo>
            <Date>{useDateLocaleString(deliveryDate)}</Date>
        </Wrapper>
    )
}