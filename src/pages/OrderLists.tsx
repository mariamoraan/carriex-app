import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useTranslation } from "react-i18next";
import { Link, useNavigate, useParams } from 'react-router-dom';
import styled from "styled-components";
import noResults from "../assets/no-results.png";
import { List } from '../components/List';
import { OrderItem } from '../components/OrderItem';
import { useAppSelector } from '../redux/hooks';

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

const OrderLists = () => {
    let {parcel} = useParams()
    const [t] = useTranslation()
    const navigate = useNavigate();
    const currentParcel = useAppSelector((state) => state.parcels.find((parcelItem) => parcelItem.id.$oid === parcel))
    let carriers = useAppSelector((state) => state.carriers.filter((carrier) => carrier.id.$oid === currentParcel?.carrier))
    const hasCarriers =  currentParcel?.itemsCount && currentParcel.itemsCount > 0

    return (
        <PageWrapper>
            <TitleWrapper onClick={() => navigate(-1)}>
                <ArrowBackIcon />
                <Title>{t("parcel_list")}</Title>
            </TitleWrapper>
            <MiddleWrapper>
            {
                hasCarriers ?
                    <>
                    <Description>{t("items_to_be_picked_up", { items_number: currentParcel.itemsCount})}</Description>
                    <ListWrapper>
                        
                            <List childrens={carriers.map((order) => ({
                                key: order.id.$oid,
                                elem: <NavLink to={`order/${order.id.$oid}`}>
                                        <OrderItem  
                                        carrier={order} 
                                        isDelivered={currentParcel.isDelivered || false}
                                        itemsNumber={currentParcel.itemsCount}
                                        />
                                      </NavLink>
                            }))} />
                            
                        
                    </ListWrapper>
                    </>
                : 
                <NoItemsWrapper>
                    <Image src={noResults} />
                    <Title>{t("no_orders_here")}</Title>
                </NoItemsWrapper>
            }
            </MiddleWrapper>
        </PageWrapper>
    )
}

export default OrderLists