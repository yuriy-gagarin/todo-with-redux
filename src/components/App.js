import React from 'react'

import Form from './Form'
import List from './List'
import Filters from './Filters'
import Test from './Test'

const App = () => (
  <div className='App'>
    <Filters />
    <Form />
    <List />

    {/* <Test /> */}
  </div>
)

export default App