import React from 'react'

import Slider from './Slider'
import Todos from './todos'
import Weather from './weather'

const App = (props) => {
  return (
    <Slider>
      <Todos />
      <Weather />
    </Slider>
  )
}

export default App