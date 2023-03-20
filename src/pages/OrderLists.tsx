import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useTranslation } from "react-i18next";
import { Link, useNavigate, useParams } from 'react-router-dom';
import styled from "styled-components";
import { List } from '../components/List';
import { OrderItem } from '../components/OrderItem';
import { PARCELS } from '../data/parcels';
import { getNumberOfItemsFromParcel } from '../utils/parcels';

const PageWrapper = styled.div`
    position: relative;
    padding: 24px;
    max-height: calc(100vh - 48px);
    display: flex;
    flex-direction: column;
`

const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`

const Title = styled.h1`
    margin-bottom: 8px;
`

const Description = styled.p`
    margin-bottom: 24px;
`

const ListWrapper = styled.div`
    overflow: scroll;
    scroll-behaviour: smooth;
    flex: 1;
`

const NavLink = styled(Link)`
    text-decoration: none;
`

const OrderLists = () => {
    let {id} = useParams()
    const [t] = useTranslation()
    const navigate = useNavigate();

    return (
        <PageWrapper>
            <TitleWrapper onClick={() => navigate(-1)}>
                <ArrowBackIcon />
                <Title>{t("parcel_list")}</Title>
            </TitleWrapper>
            {
                    id && PARCELS[id] ?
                    <>
                    <Description>{t("items_to_be_picked_up", { items_number: getNumberOfItemsFromParcel(PARCELS[id])})}</Description>
                    <ListWrapper>
                        
                            <List childrens={Object.values(PARCELS[id].orders).map((order) => ({
                                key: order.id,
                                elem: <NavLink to={`parcel/${order.id}`}><OrderItem  {...order}/></NavLink>
                            }))} />
                            
                        
                    </ListWrapper>
                    </>
                : null
            }
        </PageWrapper>
    )
}

export default OrderLists