import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { ListItemProps } from '../types';
import { ICONS } from './Icons';

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
    font-weight: bold;
    color: ${(props) => props.isDelivered ? '#B4B2B7' : 'red'};
    text-transform: uppercase;
    font-size: 12px;
`

const Date = styled.p`
    font-weight: bold;
    color: red;
    font-size: 12px;
`

export const ListItem = (props: ListItemProps) => {
    const {title, description, description2, isDelivered, icon, date} = props
    const [t] = useTranslation()
    return (
        <Wrapper>
            {isDelivered != null ? <Icon>{ICONS.TRUCK_ICON}</Icon> : null}
            {icon != null ? <Icon>{icon}</Icon> : null}
            <CentralInfo>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <Description>{description2}</Description>
            </CentralInfo>
            {isDelivered != null ? <Delivery isDelivered={isDelivered}>{t(isDelivered ? "delivered": "delivery")}</Delivery> : null}
            <Date>{date}</Date>
        </Wrapper>
    )
}