import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";


const CanvasWrapper = styled.div`
    position: relative;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
`

const CanvasElem = styled.canvas<{width: number, height: number}>`
    padding: 0;
    margin: 0;
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    border: 1px solid #A7D0D2;
    background: #BAEAEA;
    border-radius: 12px;
`

const height = 200

const getOffsetTop = (element: HTMLElement | null) => {
    let offsetTop = 0;
    while(element) {
      offsetTop += element.offsetTop;
      element = element.parentElement;
    }
    return offsetTop % window.innerHeight;
}

const getOffsetLeft = (element: HTMLElement | null) => {    
    let offsetLeft = 0;
    while(element) {
      offsetLeft += element.offsetLeft;
      element = element.parentElement;
    }
    return offsetLeft % (window.innerHeight - 48);
}

type Props = {
    onChange: (e: string) => void
}

export const Canvas = ({onChange}: Props) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    let canvas = canvasRef.current
    let currentUrl = ""
    const [isDrawing, setIsDrawing] = useState(false)
    const [width, setWidth] = useState(canvas?.parentElement?.clientWidth || 1)
    const [offsetY, setOffsetY] = useState(getOffsetTop(canvas))
    let offsetX = window.innerWidth > 1000 ? getOffsetLeft(canvas) : -1
    
    useEffect(() => { 
        canvas = canvasRef.current
        setWidth(canvas?.parentElement?.clientWidth || 0)
        setOffsetY(getOffsetTop(canvas))
        offsetX = window.innerWidth > 1000 ? getOffsetLeft(canvas) : -1
        const context = canvas?.getContext('2d')
        if (context == null) throw new Error('Could not get context');
        if (canvas) {
            canvas.height = height
            canvas.width = width
            context.strokeStyle = 'black';
            context.fillStyle = 'black';
            context.fill()
        }
    }, [])

    const startDrawingMouse = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        setIsDrawing(true)
        const context = canvas?.getContext('2d')
        if (!canvas || !context || !canvas?.parentElement) return
        context.beginPath();
        context.moveTo(e.pageX - offsetX, e.pageY - offsetY);
    }

    const startDrawingTouch = (e: React.TouchEvent<HTMLCanvasElement>) => {
        setIsDrawing(true)
        const context = canvas?.getContext('2d')
        if (!canvas || !context || !canvas?.parentElement) return
        context.beginPath();
        context.moveTo(e.touches[0].pageX - offsetX, e.touches[0].pageY - offsetY);
    }

     const drawMouse = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        if (isDrawing == true) {
            const context = canvas?.getContext('2d')
            if (!canvas || !context || !canvas?.parentElement) return
            var x = e.pageX - offsetX;
            var y = e.pageY - offsetY;
            context.lineTo(x, y);
            context.stroke();
        }
     }

    const drawTouch = (e: React.TouchEvent<HTMLCanvasElement>) => {
        if (isDrawing == true) {
            const context = canvas?.getContext('2d')
            if (!canvas || !context || !canvas?.parentElement) return
            var x = e.touches[0].pageX - offsetX;
            var y = e.touches[0].pageY - offsetY;
            context.lineTo(x, y);
            context.stroke();
        }
    }
     
    function stopDrawing() {
        setIsDrawing(false)
        let canvas = canvasRef.current;
        let tagA = document.createElement("a");
        document.body.appendChild(tagA);
        if (!canvas) return
        tagA.href = canvas.toDataURL();
        currentUrl = tagA.href
        onChange(currentUrl)
        document.body.removeChild(tagA);
    }
     
    
    return (
        <CanvasWrapper>
            <CanvasElem 
            ref={canvasRef} 
            height={height}
            width={width}
            onMouseDown={startDrawingMouse}
            onTouchStart={startDrawingTouch}
            onMouseMove={drawMouse}
            onTouchMove={drawTouch}
            onMouseUp={stopDrawing}
            onTouchEnd={stopDrawing}
            />
        </CanvasWrapper>
    )
}