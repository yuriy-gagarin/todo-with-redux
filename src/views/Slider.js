import React, { useRef, useEffect, useState } from 'react'
import { debounce } from 'lodash'

const _arrowKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']
let isScrolling
let lastAnimation

const Slider = (props) => {
  const sliderRef = useRef()

  useEffect(() => {
    document.addEventListener('keydown', onKeydown)
    return () => document.removeEventListener('keydown', onKeydown)
  }, [])

  const slickScroll = (from, to, element, duration) => {
    window.cancelAnimationFrame(lastAnimation)
    const diff = to - from
    const easing = t => t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1
    let start
    
    if (!diff) return

    const step = timestamp => {
      if (!start) start = timestamp
      const time = timestamp - start
      const percentage = easing(Math.min(time / duration, 1))

      element.scrollLeft = from + diff * percentage

      if (time < duration) {
        lastAnimation = window.requestAnimationFrame(step)
      }
    }

    lastAnimation = window.requestAnimationFrame(step)
  }
  
  const onKeydown = event => {
    if (!_arrowKeys.includes(event.key)) return
    event.preventDefault()
    if (event.key === 'ArrowLeft') {
      slickScroll(sliderRef.current.scrollLeft, 0, sliderRef.current, 500)
      return
    }
    if (event.key === 'ArrowRight') {
      slickScroll(sliderRef.current.scrollLeft, window.innerWidth + 10, sliderRef.current, 500)
      return
    }
  }
  
  const onScroll = event => {
    clearTimeout(isScrolling)
    isScrolling = setTimeout(() => {
      console.log('scrolling stopped')
    }, 100)
  }

  // moving vertically scrolls the content horizontally
  const onWheel = event => {
    const mustScroll = Array.from(document.querySelectorAll('.has-to-scroll'))
    if (mustScroll.some(elem => elem.contains(event.target))) return
    event.preventDefault()
    const delta = Math.abs(event.deltaY) > Math.abs(event.deltaX) ? event.deltaY : event.deltaX
    sliderRef.current.scrollLeft = sliderRef.current.scrollLeft + delta
  }

  return (
    <div 
      className='Slider'
      ref={sliderRef}
      onScroll={onScroll}
      onWheel={onWheel}
      // onKeydown={onKeydown}
    >
      {props.children}
    </div>
  )
}

export default Slider