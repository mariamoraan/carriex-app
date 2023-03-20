import styled from "styled-components";

const ButtonWrapper = styled.button`
    padding: 12px;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: red;
    color: white;
    border: 1px solid red;
    border-radius: 8px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
`

type Props = {
    onClick: () => void,
    text: string,
}

export const Button = (props: Props) => {
    const {onClick, text}= props
    return (
        <ButtonWrapper onClick={onClick}>{text}</ButtonWrapper>
    )
}