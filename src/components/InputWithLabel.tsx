import { ChangeEvent } from "react";
import styled from "styled-components";
import { CanvasInput } from "./CanvasInput";

const Wrapper = styled.div`
    margin: 12px 0;
    position: relative;
    padding: 12px;
    border: 1px solid black;
    border-radius: 12px;
`
const Label = styled.label`
    padding: 0 4px;
    position: absolute;
    top: -10px;
    left: 24px;
    background: white;
    font-size: 12px;
    color: #534F5A;
`
const Input = styled.input`
    width: 100%;
    border: none;
    outline: none;
`

export type ILabeledInput = {
    name: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    labelText: string,
    inputType: string,
    inputValue: any,
    required?: boolean,
}

export const InputWithLabel = (props: ILabeledInput) => {
    const {name, onChange, labelText, inputType, inputValue, required} = props
    switch(inputType) {
        case "CANVAS":
            return (<CanvasInput {...props} />)
        default:
            return (
                <Wrapper>
                    <Label htmlFor={name}>{labelText}</Label>
                    <Input value={inputValue} required={required} type={inputType} name={name} onChange={(e) => onChange(e)} />
                </Wrapper>
            )
    } 
}