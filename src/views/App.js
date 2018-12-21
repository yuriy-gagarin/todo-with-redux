import React from 'react'

import Slider from './Slider'
import Todos from './todos'
import Weather from './weather'
import FizzBuzz from './FizzBuzz'

const App = (props) => {
  return (
    <Slider>
      <Weather />
      <Todos />
      <FizzBuzz />
    </Slider>
  )
}

export default App