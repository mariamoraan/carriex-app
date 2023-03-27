import styled from "styled-components";
import { Canvas } from "./Canvas";
import { ILabeledInput } from "./InputWithLabel";

const Wrapper = styled.div`
    margin: 0;
    position: relative;
    padding: 0;
    border-radius: 12px;
`
const Label = styled.label`
    padding: 0 4px;
    position: absolute;
    top: -10px;
    left: 24px;
    z-index: 200;
    background-image: linear-gradient(white 62%, #BAEAEA 62%);
    font-size: 12px;
    color: #534F5A;
`

export const CanvasInput = (props: ILabeledInput) => {
    const {name, labelText, onChangeString} = props
    if (!onChangeString) return null
    return (
        <Wrapper>
            <Label htmlFor={name}>{labelText}</Label>
            <Canvas onChange={onChangeString} />
        </Wrapper>
    )
}