import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useTranslation } from "react-i18next";
import { Link, useNavigate, useParams } from 'react-router-dom';
import styled from "styled-components";
import { List } from '../components/List';
import { OrderItem } from '../components/OrderItem';
import { useAppSelector } from '../redux/hooks';

const PageWrapper = styled.div`
    max-width: 1000px;
    height: 100vh;
    max-height: -webkit-fill-available;
    display: flex;
    flex-direction: column;
    overflow-y: hidden;
    background: rgba(255,255,255,0.8);
    @media (min-width: 1000px) {
        height: calc(100vh - 48px);
        width: calc(100vh - 48px);
        border-radius: 24px;
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
    overflow: hidden;
    flex: 1;
`

const ListWrapper = styled.div`
    padding: 0 24px 0 24px;
    height: 100%;
    overflow-y: auto;
    scroll-behaviour: smooth;
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

    return (
        <PageWrapper>
            <TitleWrapper onClick={() => navigate(-1)}>
                <ArrowBackIcon />
                <Title>{t("parcel_list")}</Title>
            </TitleWrapper>
            <MiddleWrapper>
            {
                currentParcel ?
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
                : null
            }
            </MiddleWrapper>
        </PageWrapper>
    )
}

export default OrderLists