import styled from "styled-components";
import BadImage from "../assets/bad.png";
import OkImage from '../assets/ok.png';
import { Button } from './Button';

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,0.8);
`

const Wrapper = styled.div`
    padding: 24px;
    max-width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 48px;
    text-align: center;
    background: white;
`

const Title = styled.p`
    padding: 24px;
    font-size: 18px;
    color: #534F5A;
`

const ButtonWrapper = styled.div`
    width: 100%;
`

const Image = styled.img`
    height: 80px;
`

type Props = {
    isOk: boolean;
    message: string;
    actionMessage: string;
    open: boolean,
    handleClose: () => void,
}

export const InteractiveMessage = (props: Props) => {
    const {isOk, message, actionMessage, open, handleClose} = props
    if (!open) return null
    return (
        <Container>
            <Wrapper>
                <Image src={isOk ? OkImage : BadImage}/>
                <Title>{message}</Title>
                <ButtonWrapper><Button text={actionMessage} onClick={() => handleClose()} /></ButtonWrapper>
            </Wrapper>
        </Container>
    )
}