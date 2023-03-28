import { FormEvent, useState } from 'react';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";
import noResults from "../assets/no-results.png";
import { AddButton } from "../components/AddButton";
import { BottomMenu } from '../components/BottomMenu';
import { Button } from '../components/Button';
import { Form } from '../components/Form';
import { ILabeledInput, INPUT_TYPES } from "../components/InputWithLabel";
import { List } from "../components/List";
import { ParcelItem } from "../components/ParcelItem";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { parcelsSlice } from "../redux/reducers/parcelsReducer";

const PageWrapper = styled.div`
    max-width: 1000px;
    position: relative;
    height: 100vh;
    max-height: -webkit-fill-available;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background: rgba(255,255,255,0.8);
    @media (min-width: 1000px) {
        height: calc(100vh - 48px);
        width: calc(100vh - 48px);
        border-radius: 24px;
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
    overflow: hidden;
    flex: 1;
`

const ListWrapper = styled.div`
    padding: 0 24px 0 24px;
    height: 100%;
    overflow-y: auto;
    scroll-behaviour: smooth;
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
    const parcels = useAppSelector((state) => state.parcels)
    const carrierIds = useAppSelector((state) => state.carriers.map((carrier) => ({value: carrier.id.$oid, text: carrier.id.$oid.toLocaleUpperCase()})))
    const hasParcels = Object.keys(parcels).length > 0
    let defaultNewParcelData: {key: string, carrier: string} = {key: "", carrier: carrierIds[0].value}

    const [newParcel, setNewParcel] = useState<{key: string, carrier: string}>(defaultNewParcelData)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleSubmit = (event: FormEvent<HTMLElement>) => {
        event.preventDefault()
        dispatch(parcelsSlice.actions.addParcel({id: newParcel.key, carrier: newParcel.carrier}))
        setNewParcel(defaultNewParcelData)
        setIsMenuOpen(false)
    }

    const formInputs: ILabeledInput[] = [
        {
            name: "parcelId", 
            onChange: (e) => setNewParcel((prev) => ({...prev, key: e.target.value})), 
            labelText: t("parcel_id"), 
            inputType: "text", 
            inputValue: newParcel.key,
            required: true,
            pattern: "[A-Za-z0-9]{12}"
        },
        {
            name: "carrierId", 
            onChange: (e) => setNewParcel((prev) => ({...prev, carrier: e.target.value})), 
            labelText: t("carrier_id"), 
            inputType: INPUT_TYPES.SELECT, 
            inputValue: newParcel.carrier,
            required: true,
            options: carrierIds,
        },
    ]
    
    return (
        <PageWrapper>
            <PageTitle>{t("parcel_lists")}</PageTitle>
            <MiddleWrapper>
            { hasParcels ?
                <ListWrapper>
                    <List childrens={Object.values(parcels).map((parcel) => ({
                        key: parcel.id.$oid,
                        elem: <NavLink to={`parcel/${parcel.id.$oid}`}><ParcelItem  {...parcel}/></NavLink>
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