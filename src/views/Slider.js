import React, { useRef, useEffect, useState } from 'react'
import { debounce } from 'lodash'

const _arrowKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']

const Slider = (props) => {
  const sliderRef = useRef()

  useEffect(() => {
    document.addEventListener('keydown', onKeydown)
    return () => document.removeEventListener('keydown', onKeydown)
  }, [])
  
  const onKeydown = event => {
    if (!_arrowKeys.includes(event.key)) return
    event.preventDefault()
    if (event.key === 'ArrowLeft') {
      sliderRef.current.scrollLeft = 0
      return
    }
    if (event.key === 'ArrowRight') {
      sliderRef.current.scrollLeft = window.innerWidth + 10
      return
    }
  }
  
  const onScroll = event => {
    const current = Math.floor(sliderRef.current.scrollLeft / (window.innerWidth + 10))
    console.log(current)
  }

  const onWheel = event => {
    event.preventDefault()
    const delta = Math.abs(event.deltaY) > Math.abs(event.deltaX) ? event.deltaY : event.deltaX
    if (delta >= 100) {
      sliderRef.current.scrollLeft = window.innerWidth + 10
    }
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