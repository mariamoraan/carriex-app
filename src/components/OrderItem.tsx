import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { IOrderElem } from "../types";
import { getNumberOfItemsFromOrder } from "../utils/parcels";
import { ICONS } from "./Icons";

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

const Icon = styled.div`
    padding: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1 / 1;
    text-align: center;
    background: #FCE6E6;
    color: #DF0000;
    border-radius: 8px;
`

const Delivery = styled.p<{isDelivered: boolean}>`
    color: ${(props) => props.isDelivered ? '#B4B2B7' : 'red'};
    text-transform: uppercase;
    font-size: 12px;
`

export const OrderItem = (props: IOrderElem) => {
    const {id, company, isDelivered} = props
    const [t] = useTranslation()
    return (
        <Wrapper>
            <Icon>{ICONS.TRUCK_ICON}</Icon>
            <CentralInfo>
                <Title>{`${id} ${t("parcel_list")}`}</Title>
                <Description>{company}</Description>
                <Description>{t("items_to_be_picked_up", {items_number: getNumberOfItemsFromOrder(props)})}</Description>
            </CentralInfo>
            {isDelivered != null ? <Delivery isDelivered={isDelivered}>{t(isDelivered ? "delivered": "delivery")}</Delivery> : null}
        </Wrapper>
    )
}