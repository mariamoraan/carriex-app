import styled from 'styled-components';

const ListWrapper = styled.ul`
    padding: 0;
    display: flex;
    flex-direction: column;
    list-style: none;
`
const ListItem = styled.li`
    padding: 12px 0;
    border-top: 1px solid #E7E6E8;
    &:nth-child(1) {
        border-top: none;
    }
`

type Props = {
    childrens: {elem: JSX.Element, key: string}[];
};

export const List = ({childrens}: Props) => {
    return (
        <ListWrapper>
            {childrens.map((children) => (
                <ListItem key={children.key}>{children.elem}</ListItem>
            ))}
        </ListWrapper>
    )
}
