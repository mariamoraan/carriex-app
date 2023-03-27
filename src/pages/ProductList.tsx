import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { FormEvent, useState } from 'react';
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from 'react-router-dom';
import styled from "styled-components";
import noResults from "../assets/no-results.png";
import { BottomMenu } from '../components/BottomMenu';
import { Button } from '../components/Button';
import { ComposedForm, IComposedForm } from '../components/ComposedForm';
import { InteractiveMessage } from '../components/InteractiveMessage';
import { List } from '../components/List';
import { ProductItem } from '../components/ProductItem';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { parcelsSlice } from '../redux/reducers/parcelsReducer';

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

const TitleWrapper = styled.div`
    padding: 24px 24px 0 24px;
    display: flex;
    align-items: center;
    gap: 12px;
    color: #534F5A;
`

const Title = styled.h1`
    margin-bottom: 8px;
    font-size: 24px;
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
    transform: translateY(90%);
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
    padding: 24px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

let defaultDelivery: {driverName: string, driverLicensePlate: string, driverSignature: string} = {driverName: "", driverLicensePlate: "", driverSignature: ""}

const ProductList = () => {
    let {parcel, order} = useParams()
    const [t] = useTranslation()
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    const parcels = useAppSelector((state) => state.parcels)
    let hasProducts = parcel && order && parcels[parcel].orders[order].products && Object.keys(parcels[parcel].orders[order].products).length > 0

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [delivery, setDelivery] = useState<{driverName: string, driverLicensePlate: string, driverSignature: string}>(defaultDelivery)
    const [showDialog, setShowDialog] = useState(false)

    const getCurrentOrderIsDelivered = (): boolean => {
        if(!parcel || !order) return false
        return parcels[parcel].orders[order].isDelivered
    }
    
    const handleSubmitSubForm = (event: FormEvent<HTMLElement>) => {
        event.preventDefault()
    }

    const handleSubmit = (event: FormEvent<HTMLElement>) => {
        event.preventDefault()
        if (!parcel || !order) return
        dispatch(parcelsSlice.actions.deliverOrder({parcelId: parcel, orderId: order, driverName: delivery.driverName, driverLicensePlate: delivery.driverLicensePlate}))
        setDelivery(defaultDelivery)
        setIsMenuOpen(false)
        setShowDialog(true)
    }

    const handleCloseDialog = () => {
        setShowDialog(false)
        navigate(`/parcel/${parcel}`)
    }

    const composedForm: IComposedForm = {
        forms: [
            {
                title: t("delivery_information"),
                handleSubmit: (e) => handleSubmitSubForm(e),
                labeledInputs: [
                    {
                        name: "driverName", 
                        onChange: (e) => setDelivery((prev) => ({...prev, driverName: e.target.value})), 
                        labelText: "Driver's name", 
                        inputType: "text", 
                        inputValue: delivery.driverName,
                        required: true,
                    },
                    {
                        name: "driverLicensePlate", 
                        onChange: (e) => setDelivery((prev) => ({...prev, driverLicensePlate: e.target.value})), 
                        labelText: "License plate", 
                        inputType: "text", 
                        inputValue: delivery.driverLicensePlate,
                        required: true,
                    },
                ]
            },
            {
                title: t("drivers_signature"),
                handleSubmit: (e) => handleSubmitSubForm(e),
                labeledInputs: [
                    {
                        name: "driverSignature", 
                        onChange: (e) => setDelivery((prev) => ({...prev, driverSignature: e.target.value})), 
                        labelText: "Driver's signature", 
                        inputType: "CANVAS", 
                        inputValue: delivery.driverSignature,
                        required: true,
                    },
                ]
            },
        ],
        handleSubmitForm: (e) => handleSubmit(e)
    }

    return (
        <PageWrapper>
            <TitleWrapper onClick={() => navigate(-1)}>
                <ArrowBackIcon />
                <Title>{`${order} ${t("parcel_list")}`}</Title>
            </TitleWrapper>
            <MiddleWrapper>
            {
                    parcel && order && parcels[parcel].orders[order].products && Object.keys(parcels[parcel].orders[order].products).length > 0 ?
                    <ListWrapper>
                        
                            <List childrens={Object.values(parcels[parcel].orders[order].products).map((product) => ({
                                key: product.id,
                                elem: <ProductItem  {...product}/>
                            }))} />
                            
                        
                    </ListWrapper>
                : 
                <NoItemsWrapper>
                    <Image src={noResults} />
                    <Title>{t("no_products_here")}</Title>
                </NoItemsWrapper>
            }
            </MiddleWrapper>
            <BottomWrapper>
                {!getCurrentOrderIsDelivered() && hasProducts ? <Button text={t('delivery')} onClick={() => setIsMenuOpen(true)} /> : null}
                <BottomMenu 
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                afterClose={() => setDelivery(defaultDelivery)}
                >
                    <>
                <ComposedForm {...composedForm} />
                </>
                </BottomMenu>
            </BottomWrapper>
            <InteractiveMessage 
                isOk={true}
                message={t("parcel_successfully_delivered")}
                actionMessage={t('go_to_parcel_list')}
                open={showDialog} 
                handleClose={handleCloseDialog} 
            />
        </PageWrapper>
    )
}

export default ProductList