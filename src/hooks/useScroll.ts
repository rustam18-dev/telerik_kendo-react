import { useState, MouseEvent, RefObject } from "react";

export const useScroll = (itemsRef: RefObject<HTMLDivElement | null>) => {
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false)
  const [startX, setStartX] = useState<number>(0)
  const [scrollLeft, setScrollLeft] = useState<number>(0)

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!itemsRef.current) return

    setIsMouseDown(true)
    setStartX(e.pageX - itemsRef.current.offsetLeft)
    setScrollLeft(itemsRef.current.scrollLeft)
  }

  const handleMouseLeave = () => {
    setIsMouseDown(false)
  }

  const handleMouseUp = () => {
    setIsMouseDown(false)
  }

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isMouseDown || !itemsRef.current) return

    e.preventDefault()
    const x = e.pageX - itemsRef.current.offsetLeft
    const walk = (x - startX) * 1.3
    itemsRef.current.scrollLeft = scrollLeft - walk
  }

  return {
    handleMouseDown,
    handleMouseLeave,
    handleMouseUp,
    handleMouseMove
  }
}
