import styled from "styled-components";
import { ILabeledInput } from "./InputWithLabel";

const Select = styled.select`
    width: 100%;
    border: none;
    outline: none;
`

const Option = styled.option`
    width: 100%;
    border: none;
    outline: none;
`


export const SelectInput = (props: ILabeledInput) => {
    const {name, options, onChange} = props
    return (
        <Select id={name} name={name} onChange={(e) => onChange(e)} >
            {
                options ?
                options.map(({value, text}) => (
                    <Option key={value} value={value}>{text}</Option>
                ))
                : null
            }
        </Select>
    )
}