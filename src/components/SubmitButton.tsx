import { useTranslation } from "react-i18next";
import styled from "styled-components";

const SubmitButtonWrapper = styled.input`
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

export const SubmitButton = ({text}: {text?: string}) => {
    const [t] = useTranslation()
    return (
        <SubmitButtonWrapper type="submit" value={text || t("save") || "Save"} />
    )
}