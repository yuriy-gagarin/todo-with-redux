import React from 'react'
import PropTypes from 'prop-types'

import Filters from './Filters'
import Form from './Form'
import List from './List'
import LoadingSpinner from './LoadingSpinner'

const Todos = ({filter}) => {
  const validateFilter = filter => {
    const filters = ['all', 'active', 'completed']
    return filter && filters.includes(filter) ? filter : 'all'
  }

  return (
    <div className='Todos panel'>
      <Filters filter={validateFilter(filter)} />
      <Form />
      <List filter={validateFilter(filter)}/>
      <LoadingSpinner filter={validateFilter(filter)}/>
    </div>
  )
}

Filters.propTypes = {
  filter: PropTypes.string.isRequired
}

export default Todos