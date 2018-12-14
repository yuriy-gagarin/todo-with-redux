import React, { useState, useRef } from 'react'

const Slider = (props) => {
  const sliderRef = useRef()
  const [pos, setPos] = useState(0)
  const [start, setStart] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(false)
  const [isDown, setDown] = useState(false)

  const handleMouseDown = e => {
    setDown(true)
    setStart(e.pageX)
    setScrollLeft(sliderRef.current.scrollLeft)
  }

  const handleMouseLeave = e => {
    setDown(false)
  }

  const handleMouseUp = e => {
    setDown(false)
  }

  const handleMouseMove = e => {
    if (!isDown) return
    e.preventDefault()
    const x = e.pageX
    const walk = (x - start)
    sliderRef.current.scrollLeft = scrollLeft - walk
  }

  const handleScroll = e => {

  }

  return (
    <div 
      className='Slider'
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onScroll={handleScroll}
    >
      {props.children}
    </div>
  )
}

export default Slider