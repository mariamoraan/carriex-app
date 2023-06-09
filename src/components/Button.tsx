import styled from "styled-components";

const ButtonWrapper = styled.button`
    margin: 12px 24px;
    padding: 12px;
    width: calc(100% - 48px);
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