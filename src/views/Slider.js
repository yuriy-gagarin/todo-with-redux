import React, { useRef } from 'react'

const Slider = (props) => {
  const sliderRef = useRef()

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