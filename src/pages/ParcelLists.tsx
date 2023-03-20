import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AddButton } from "../components/AddButton";
import { List } from "../components/List";
import { ParcelItem } from "../components/ParcelItem";
import { PARCELS } from "../data/parcels";

const PageWrapper = styled.div`
    position: relative;
    padding: 24px;
    max-height: calc(100vh - 48px);
    display: flex;
    flex-direction: column;
`

const PageTitle = styled.h1`
    margin-bottom: 24px;
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

const NavLink = styled(Link)`
    text-decoration: none;
`

const ParcelLists = () => {
    const [t] = useTranslation()
    return (
        <PageWrapper>
            <PageTitle>{t("parcel_lists")}</PageTitle>
            <ListWrapper>
                <List childrens={Object.values(PARCELS).map((parcel) => ({
                    key: parcel.key,
                    elem: <NavLink to={`parcel/${parcel.key}`}><ParcelItem  {...parcel}/></NavLink>
                }))} />
            </ListWrapper>
            <BottomWrapper><AddButton /></BottomWrapper>
        </PageWrapper>
    )
}

export default ParcelLists