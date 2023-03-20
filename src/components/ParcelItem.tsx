import styled from "styled-components";
import { IParcel } from "../types";

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

export const ParcelItem = (props: IParcel) => {
    const {title, description, description2, date} = props
    return (
        <Wrapper>
            <CentralInfo>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <Description>{description2}</Description>
            </CentralInfo>
            <Date>{date}</Date>
        </Wrapper>
    )
}