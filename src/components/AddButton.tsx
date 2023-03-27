import AddIcon from '@mui/icons-material/Add';
import styled from 'styled-components';

const Wrapper = styled.button`
    padding: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: red;
    color: white;
    border-radius: 100%;
    border: 1px solid red;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

export const AddButton = ({onClick}: {onClick: () => void}) => {
    return (
        <Wrapper><AddIcon onClick={onClick} /></Wrapper>
    )
}

