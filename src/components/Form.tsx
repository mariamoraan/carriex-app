import { FormEvent } from "react";
import styled from "styled-components";
import { ILabeledInput, InputWithLabel } from "./InputWithLabel";
import { SubmitButton } from "./SubmitButton";

const Wrapper = styled.div`
`

const Title = styled.h2`
    padding: 12px 24px;
    text-align: center;
`
const FormWrapper = styled.form`
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export type IForm = {
    title: string,
    handleSubmit: (e: FormEvent<HTMLElement>) => void,
    labeledInputs: ILabeledInput[],
    submitText?: string,
}

export const Form = (props: IForm) => {
    const {labeledInputs, handleSubmit, title, submitText} = props
    return (
        <Wrapper>
            <Title>{title}</Title>
            <FormWrapper onSubmit={(e) => handleSubmit(e)}>
                {
                    labeledInputs.map(({name, onChange, labelText, inputType, inputValue, required, options}) => (
                        <InputWithLabel
                        key={name}
                        name={name}
                        onChange={onChange}
                        labelText={labelText}
                        inputType={inputType}
                        inputValue={inputValue}
                        required={required}
                        options={options}
                    />
                    ))  
                }
            <SubmitButton text={submitText} />
            </FormWrapper>
        </Wrapper>
    )
}