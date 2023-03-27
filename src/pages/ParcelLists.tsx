import { FormEvent, useState } from 'react';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";
import noResults from "../assets/no-results.png";
import { AddButton } from "../components/AddButton";
import { BottomMenu } from '../components/BottomMenu';
import { Button } from '../components/Button';
import { Form } from '../components/Form';
import { ILabeledInput } from "../components/InputWithLabel";
import { List } from "../components/List";
import { ParcelItem } from "../components/ParcelItem";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { parcelsSlice } from "../redux/reducers/parcelsReducer";

const PageWrapper = styled.div`
    max-width: 1000px;
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    @media (min-width: 1000px) {
        height: calc(100vh - 48px);
        max-width: calc(100vh - 48px);
        position: relative;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        margin-top: 24px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
`

const PageTitle = styled.h1`
    padding: 24px 24px 0 24px;
    margin-bottom: 12px;
    font-size: 24px;
    color: #534F5A;
    font-weight: normal;
`

const MiddleWrapper = styled.div`
    position: relative;
    flex: 1;
`

const ListWrapper = styled.div`
    padding: 0 24px 0 24px;
    overflow: scroll;
    scroll-behaviour: smooth;
    flex: 1;
`

const NoItemsWrapper = styled.div`
    transform: translateY(50%);
    margin: 24px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 8px;
`

const Image = styled.img`
    height: 80px;
`

const BottomWrapper = styled.div`
    position: relative;
    padding: 24px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

const NavLink = styled(Link)`
    text-decoration: none;
`

const ParcelLists = () => {
    const [t] = useTranslation()
    const dispatch = useAppDispatch()
    let defaultNewParcelData: {key: string, date: string} = {key: "", date: (new Date()).toISOString().split('T')[0]}
    const parcels = useAppSelector((state) => state.parcels)
    const hasParcels = Object.keys(parcels).length > 0

    const [newParcel, setNewParcel] = useState<{key: string, date: string}>(defaultNewParcelData)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleSubmit = (event: FormEvent<HTMLElement>) => {
        event.preventDefault()
        let parsedDate = JSON.stringify(new Date(newParcel.date))
        dispatch(parcelsSlice.actions.addParcel({id: newParcel.key, date: parsedDate}))
        setNewParcel(defaultNewParcelData)
        setIsMenuOpen(false)
    }

    const formInputs: ILabeledInput[] = [
        {
            name: "parcelId", 
            onChange: (e) => setNewParcel((prev) => ({...prev, key: e.target.value})), 
            labelText: "Parcel ID", 
            inputType: "text", 
            inputValue: newParcel.key,
            required: true,
        },
        {
            name: "parcelDate", 
            onChange: (e) => setNewParcel((prev) => ({...prev, date: e.target.value})), 
            labelText: "Pickup Date", 
            inputType: "date", 
            inputValue: newParcel.date,
            required: true,
        },
    ]
    
    return (
        <PageWrapper>
            <PageTitle>{t("parcel_lists")}</PageTitle>
            <MiddleWrapper>
            { hasParcels ?
                <ListWrapper>
                    <List childrens={Object.values(parcels).map((parcel) => ({
                        key: parcel.key,
                        elem: <NavLink to={`parcel/${parcel.key}`}><ParcelItem  {...parcel}/></NavLink>
                    }))} />
                </ListWrapper>
                :
                <NoItemsWrapper>
                    <Image src={noResults} />
                    <PageTitle>{t("no_parcels_here")}</PageTitle>
                    <Button text={t("try_to_add_first_parcel")} onClick={() => setIsMenuOpen(true)} />
                </NoItemsWrapper>
            }
            </MiddleWrapper>
            <BottomWrapper>
                {hasParcels ? <AddButton onClick={() => setIsMenuOpen(true)} /> : null}
                <BottomMenu 
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                afterClose={() => setNewParcel(defaultNewParcelData)}
                >
                <Form 
                title={t("parcel_information")}
                handleSubmit={handleSubmit}
                labeledInputs={formInputs}
                />
                </BottomMenu>
            </BottomWrapper>
        </PageWrapper>
    )
}

export default ParcelLists