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
        if (!isMouseDown || Math.abs(e.movementY) < 5) return
        afterClose()
        setIsMenuOpen(false)
        setIsMouseDown(false)
    }
    
    return (
        <BottomMenuWrapper isMenuOpen={isMenuOpen} >
            <BottomMenuDragger 
            onClick={() => afterClose()} 
            onTouchMove={handleCloseFormByTouchable} 
            onMouseDown={() => setIsMouseDown(true)} 
            onMouseUp={() => setIsMouseDown(false)}
            onMouseMove={(e) => handleCloseFormByMouse(e)}
            />
            {children}
        </BottomMenuWrapper>
    )
}