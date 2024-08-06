import { MouseEvent, useRef } from 'react'

export const useSliderDraggableScroll = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isMouseDownRef = useRef(false)

  const setIsMouseDown = (value: boolean) => (isMouseDownRef.current = value)

  const mouseCoords = useRef({ startX: 0, startY: 0, scrollLeft: 0, scrollTop: 0 })

  const handleDragStart = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault()
    event.stopPropagation()
    event.nativeEvent.stopImmediatePropagation()
    if (!ref.current) return
    const slider = ref.current

    slider.classList.remove('scroll-smooth')

    const startX = event.pageX - slider.offsetLeft
    const startY = event.pageY - slider.offsetTop
    const scrollLeft = slider.scrollLeft
    const scrollTop = slider.scrollTop
    mouseCoords.current = { startX, startY, scrollLeft, scrollTop }
    setIsMouseDown(true)
    document.body.style.cursor = 'grabbing'
  }
  const handleDragEnd = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault()
    event.stopPropagation()
    event.nativeEvent.stopImmediatePropagation()
    setIsMouseDown(false)
    if (!ref.current) return
    const slider = ref.current
    slider.classList.add('scroll-smooth')

    document.body.style.cursor = 'default'
  }
  const handleDrag = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    if (!isMouseDownRef.current || !ref.current) return
    const slider = ref.current
    const x = event.pageX - slider.offsetLeft
    const y = event.pageY - slider.offsetTop
    const walkX = (x - mouseCoords.current.startX) * 1.5
    const walkY = (y - mouseCoords.current.startY) * 1.5
    slider.scrollLeft = mouseCoords.current.scrollLeft - walkX
    slider.scrollTop = mouseCoords.current.scrollTop - walkY
  }

  const onClick = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault()
    event.stopPropagation()
  }

  return {
    ref,
    isMouseDownRef,
    onMouseDown: handleDragStart,
    onMouseUp: handleDragEnd,
    onMouseMove: handleDrag,
    onMouseLeave: handleDragEnd,
    onClick,
  }
}
