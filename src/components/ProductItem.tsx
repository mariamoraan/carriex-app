import styled from "styled-components";
import { IProductElem } from "../types";
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

export const ProductItem = (props: IProductElem) => {
    const {title, weight, icon} = props
    return (
        <Wrapper>
            <Icon>{icon ? ICONS[icon] : null}</Icon>
            <CentralInfo>
                <Title>{title}</Title>
                <Description>{weight}</Description>
            </CentralInfo>
        </Wrapper>
    )
}