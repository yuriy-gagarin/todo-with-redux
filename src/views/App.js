import React from 'react'

import queryString from 'query-string'

import Todos from './components/Todos'

const App = ({location}) => {
  const query = queryString.parse(location.search)
  return (
    <Todos {...query} />
  )
}

export default App