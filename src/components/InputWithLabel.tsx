import { ChangeEvent } from "react";
import styled from "styled-components";
import { INPUT_TYPES } from "../constants/inputs";
import { CanvasInput } from "./CanvasInput";
import { SelectInput } from "./SelectInput";

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
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
    onChangeString?: (e: string) => void,
    labelText: string,
    inputType: string,
    inputValue: any,
    required?: boolean,
    options?: {value: string, text: string}[],
    pattern?: string
}

export const InputWithLabel = (props: ILabeledInput) => {
    const {name, onChange, labelText, inputType, inputValue, required, pattern} = props
    switch(inputType) {
        case INPUT_TYPES.CANVAS:
            return (<CanvasInput {...props} />)
        case INPUT_TYPES.SELECT: 
            return (
            <Wrapper>
                <Label htmlFor={name}>{labelText}</Label>
                <SelectInput {...props} />
            </Wrapper>
            )
        default:
            return (
                <Wrapper>
                    <Label htmlFor={name}>{labelText}</Label>
                    <Input 
                    value={inputValue} 
                    required={required} 
                    type={inputType} 
                    name={name} 
                    pattern={pattern ? `${pattern}` : undefined} 
                    onChange={(e) => onChange(e)} 
                    />
                </Wrapper>
            )
    } 
}

export { INPUT_TYPES };

