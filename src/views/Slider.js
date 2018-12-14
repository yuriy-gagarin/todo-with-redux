import React, { useRef, useEffect, useState } from 'react'

const _arrowKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']

const Slider = (props) => {
  const sliderRef = useRef()
  const [current, setCurrent] = useState(0)

  const handleKeyDown = event => {
    if (_arrowKeys.includes(event.key)) {
      event.preventDefault()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () =>
      document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div 
      className='Slider'
      ref={sliderRef}
    >
      {props.children}
    </div>
  )
}

export default Slider