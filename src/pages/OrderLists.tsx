import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useTranslation } from "react-i18next";
import { Link, useNavigate, useParams } from 'react-router-dom';
import styled from "styled-components";
import { AddButton } from '../components/AddButton';
import { List } from '../components/List';
import { OrderItem } from '../components/OrderItem';
import { PARCELS } from '../data/parcels';
import { getNumberOfItemsFromParcel } from '../utils/parcels';

const PageWrapper = styled.div`
    position: relative;
    padding: 24px;
    height: calc(100vh - 48px);
    display: flex;
    flex-direction: column;
`

const TitleWrapper = styled.div`
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
    font-size: 12px;
    color: #534F5A;
`

const ListWrapper = styled.div`
    overflow: scroll;
    scroll-behaviour: smooth;
    flex: 1;
`

const NavLink = styled(Link)`
    text-decoration: none;
`

const BottomWrapper = styled.div`
    padding-top: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const OrderLists = () => {
    let {parcel} = useParams()
    const [t] = useTranslation()
    const navigate = useNavigate();

    return (
        <PageWrapper>
            <TitleWrapper onClick={() => navigate(-1)}>
                <ArrowBackIcon />
                <Title>{t("parcel_list")}</Title>
            </TitleWrapper>
            {
                    parcel && PARCELS[parcel] ?
                    <>
                    <Description>{t("items_to_be_picked_up", { items_number: getNumberOfItemsFromParcel(PARCELS[parcel])})}</Description>
                    <ListWrapper>
                        
                            <List childrens={Object.values(PARCELS[parcel].orders).map((order) => ({
                                key: order.id,
                                elem: <NavLink to={`order/${order.id}`}><OrderItem  {...order}/></NavLink>
                            }))} />
                            
                        
                    </ListWrapper>
                    </>
                : null
            }
            <BottomWrapper><AddButton /></BottomWrapper>
        </PageWrapper>
    )
}

export default OrderLists