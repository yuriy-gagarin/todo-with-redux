import React from 'react'

import queryString from 'query-string'

import Todos from './todos'
import Weather from './weather'

const validateFilter = filter => {
  const filters = ['all', 'active', 'completed']
  return filter && filters.includes(filter) ? filter : 'all'
}

const App = ({location}) => {
  const query = queryString.parse(location.search)
  return (
    <>
    <Todos {...query} />
    <Weather />
    </>
  )
}

export default App