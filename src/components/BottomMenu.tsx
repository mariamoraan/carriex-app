import React, { useState } from "react";
import styled from "styled-components";

const BottomMenuWrapper = styled.div<{isMenuOpen: boolean}>`
    position: absolute;
    bottom: ${(props) => props.isMenuOpen ? '0' : '-100vh'};
    z-index: 100;
    width: 100%;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 45px 45px 0 0;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 800ms ease;
`

const BottomMenuDraggerWrapper = styled.div`
    padding: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const BottomMenuDragger = styled.div`
    margin: 12px;
    align-self: center;
    height: 2px;
    width: 24px;
    background: #EEEEEF;
`

type Props = {
    isMenuOpen: boolean,
    setIsMenuOpen: (arg0: boolean) => void,
    afterClose: () => void,
    children: JSX.Element
}

export const BottomMenu = (props: Props) => {
    const {isMenuOpen, setIsMenuOpen, afterClose, children} = props
    const [isMouseDown, setIsMouseDown] = useState(false)

    const handleCloseFormByTouchable = () => {
        afterClose()
        setIsMenuOpen(false)
    }

    const handleCloseFormByMouse = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (!isMouseDown) return
        afterClose()
        setIsMenuOpen(false)
    }
    
    return (
        <BottomMenuWrapper isMenuOpen={isMenuOpen} >
            <BottomMenuDraggerWrapper 
            onTouchMove={handleCloseFormByTouchable} 
            onMouseDown={() => setIsMouseDown(true)} 
            onMouseUp={() => setIsMouseDown(false)}
            onMouseMove={(e) => handleCloseFormByMouse(e)}>
                <BottomMenuDragger />
            </BottomMenuDraggerWrapper>
            {children}
        </BottomMenuWrapper>
    )
}