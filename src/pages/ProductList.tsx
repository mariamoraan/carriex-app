import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from 'react-router-dom';
import styled from "styled-components";
import { Button } from '../components/Button';
import { List } from '../components/List';
import { ProductItem } from '../components/ProductItem';
import { PARCELS } from "../data/parcels";

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

const ListWrapper = styled.div`
    overflow: scroll;
    scroll-behaviour: smooth;
    flex: 1;
`

const BottomWrapper = styled.div`
    padding-top: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ProductList = () => {
    let {parcel, order} = useParams()
    const [t] = useTranslation()
    const navigate = useNavigate();
    
    return (
        <PageWrapper>
            <TitleWrapper onClick={() => navigate(-1)}>
                <ArrowBackIcon />
                <Title>{`${order} ${t("parcel_list")}`}</Title>
            </TitleWrapper>
            {
                    parcel && order && PARCELS[parcel].orders[order].products ?
                    <ListWrapper>
                        
                            <List childrens={Object.values(PARCELS[parcel].orders[order].products).map((product) => ({
                                key: product.id,
                                elem: <ProductItem  {...product}/>
                            }))} />
                            
                        
                    </ListWrapper>
                : null
            }
            <BottomWrapper>
                <Button text={t('delivery')} onClick={() => {console.log("hey")}} />
            </BottomWrapper>
        </PageWrapper>
    )
}

export default ProductList