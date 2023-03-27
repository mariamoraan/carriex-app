import { FormEvent, useState } from "react"
import { Form, IForm } from "./Form"

export type IComposedForm = {
    forms: IForm[],
    handleSubmitForm: (e: FormEvent<HTMLElement>) => void,
}

export const ComposedForm = (props: IComposedForm) => {
    const {forms, handleSubmitForm} = props
    const [currentForm, setCurrentForm] = useState(0)
    const handleSubmit = (e: FormEvent<HTMLElement>) => {
        if(currentForm == forms.length - 1) {
            handleSubmitForm(e)
            setCurrentForm(0)
        }
        else {
            forms[currentForm].handleSubmit(e)
            setCurrentForm(currentForm + 1)
        }
    }
    return (
        <Form
        title={forms[currentForm].title}
        handleSubmit={handleSubmit}
        labeledInputs={forms[currentForm].labeledInputs}
        submitText={currentForm < forms.length - 1 ? "next" : undefined}
        />
    )
}