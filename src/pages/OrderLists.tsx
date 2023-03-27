import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { FormEvent, useState } from 'react';
import { useTranslation } from "react-i18next";
import { Link, useNavigate, useParams } from 'react-router-dom';
import styled from "styled-components";
import noResults from "../assets/no-results.png";
import { AddButton } from '../components/AddButton';
import { BottomMenu } from '../components/BottomMenu';
import { Button } from '../components/Button';
import { Form } from '../components/Form';
import { ILabeledInput } from '../components/InputWithLabel';
import { List } from '../components/List';
import { OrderItem } from '../components/OrderItem';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { parcelsSlice } from '../redux/reducers/parcelsReducer';
import { getNumberOfItemsFromParcel } from '../utils/parcels';

const PageWrapper = styled.div`
    max-width: 1000px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow-y: hidden;
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

const Description = styled.p`
    padding: 0 24px 0 24px;
    font-size: 12px;
    color: #534F5A;
`

const MiddleWrapper = styled.div`
    position: relative;
    flex: 1;
`

const ListWrapper = styled.div`
    padding: 0 24px 0 24px;
    overflow: scroll;
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

const NavLink = styled(Link)`
    text-decoration: none;
`

const BottomWrapper = styled.div`
    padding: 24px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`


let defaultNewOrderData: {orderId: string, company: string} = {orderId: "", company: ""}

const OrderLists = () => {
    let {parcel} = useParams()
    const [t] = useTranslation()
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    const parcels = useAppSelector((state) => state.parcels)
    const hasOrders =  parcel && parcels[parcel] && Object.keys(parcels[parcel].orders).length > 0

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [newOrder, setNewOrder] = useState<{orderId: string, company: string}>(defaultNewOrderData)

    const handleSubmit = (event: FormEvent<HTMLElement>) => {
        event.preventDefault()
        if (!parcel) return
        dispatch(parcelsSlice.actions.addOrder({parcelId: parcel, orderId: newOrder.orderId, company: newOrder.company}))
        setNewOrder(defaultNewOrderData)
        setIsMenuOpen(false)
    }

    const formInputs: ILabeledInput[] = [
        {
            name: "orderId", 
            onChange: (e) => setNewOrder((prev) => ({...prev, orderId: e.target.value})) , 
            labelText: "Order ID", 
            inputType: "text", 
            inputValue: newOrder.orderId,
            required: true,
        },
        {
            name: "company", 
            onChange: (e) => setNewOrder((prev) => ({...prev, company: e.target.value})) , 
            labelText: "Company", 
            inputType: "text", 
            inputValue: newOrder.company,
            required: true,
        },
    ]

    return (
        <PageWrapper>
            <TitleWrapper onClick={() => navigate(-1)}>
                <ArrowBackIcon />
                <Title>{t("parcel_list")}</Title>
            </TitleWrapper>
            <MiddleWrapper>
            {
                    parcel && parcels[parcel] && Object.keys(parcels[parcel].orders).length > 0 ?
                    <>
                    <Description>{t("items_to_be_picked_up", { items_number: getNumberOfItemsFromParcel(parcels[parcel])})}</Description>
                    <ListWrapper>
                        
                            <List childrens={Object.values(parcels[parcel].orders).map((order) => ({
                                key: order.id,
                                elem: <NavLink to={`order/${order.id}`}><OrderItem  {...order}/></NavLink>
                            }))} />
                            
                        
                    </ListWrapper>
                    </>
                : 
                <NoItemsWrapper>
                    <Image src={noResults} />
                    <Title>{t("no_orders_here")}</Title>
                    <Button text={t("try_to_add_first_order")} onClick={() => setIsMenuOpen(true)} />
                </NoItemsWrapper>
            }
            </MiddleWrapper>
            <BottomWrapper>
                {hasOrders ? <AddButton onClick={() => setIsMenuOpen(true)} /> : null}
                <BottomMenu 
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                afterClose={() => setNewOrder(defaultNewOrderData)}
                >
                <Form 
                    title={t("order_information")}
                    handleSubmit={handleSubmit}
                    labeledInputs={formInputs}
                />
                </BottomMenu>
            </BottomWrapper>
        </PageWrapper>
    )
}

export default OrderLists