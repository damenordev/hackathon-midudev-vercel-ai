'use client'
import { Children, forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react'

import { cn } from '@/styles'

import { useSliderDraggableScroll } from './useSliderDraggableScroll'
import { SliderDots } from './SliderDots'

export interface ISliderProps {
  className?: string
  classNameSlider?: string
  children: React.ReactNode[]
  addBlurHorizontalScroll?: boolean
  showDots?: boolean
  onChangeIndex?: (index: number) => void
}

export interface ISliderRef {
  goPrev: () => void
  goNext: () => void
  goTo: (index: number) => void
}

export const Slider = forwardRef<ISliderRef, ISliderProps>(
  ({ children, className, classNameSlider, onChangeIndex, showDots, addBlurHorizontalScroll }, ref) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const childRefs = useRef<(HTMLDivElement | null)[]>([])
    const { ref: sliderRef, isMouseDownRef, ...draggableProps } = useSliderDraggableScroll()

    const scrollElementIntoView = useCallback(
      (index: number, smooth = true) => {
        if (isMouseDownRef.current) return
        const slider = sliderRef.current
        const childRef = childRefs.current[index]
        if (slider && childRef) {
          const scrollLeft = childRef.offsetLeft - slider.offsetWidth / 2 + childRef.offsetWidth / 2
          slider.scrollTo({ left: scrollLeft, behavior: smooth ? 'smooth' : 'auto' })
        }
        setActiveIndex(index)
        if (onChangeIndex) onChangeIndex(index)
      },
      [onChangeIndex] // eslint-disable-line
    )

    const goPrev = useCallback(() => {
      let nextIndex = activeIndex - 1
      if (nextIndex < 0) nextIndex = Children.count(children) - 1
      scrollElementIntoView(nextIndex)
    }, [activeIndex, children, scrollElementIntoView])

    const goNext = useCallback(
      () => {
        let nextIndex = activeIndex + 1
        if (nextIndex === Children.count(children)) nextIndex = 0
        scrollElementIntoView(nextIndex)
      },
      [activeIndex, children, scrollElementIntoView] // eslint-disable-line
    )

    const goTo = useCallback(
      (index: number) => {
        const validIndex = Math.max(0, Math.min(index, Children.count(children) - 1))
        scrollElementIntoView(validIndex, false)
      },
      [children, scrollElementIntoView]
    )

    useImperativeHandle(ref, () => ({ goPrev, goNext, goTo }), [goPrev, goNext, goTo])

    return (
      <div className={cn('relative select-none', className)}>
        <div ref={sliderRef} className={cn('flex overflow-x-auto scrollbar-hide', classNameSlider)} {...draggableProps}>
          {Children.map(children, (child, index) => (
            <div
              key={`child-${index}`}
              ref={el => (childRefs.current[index] = el) as any}
              onClick={() => scrollElementIntoView(index)}
            >
              {child}
            </div>
          ))}
        </div>
        {showDots && <SliderDots activeIndex={activeIndex} numberOfSlides={Children.count(children)} onClick={goTo} />}
        {addBlurHorizontalScroll && (
          <>
            <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-background to-transparent"></div>
            <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-background to-transparent"></div>
          </>
        )}
      </div>
    )
  }
)

Slider.displayName = 'Slider'
