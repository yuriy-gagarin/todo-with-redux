import React from 'react'
import PropTypes from 'prop-types'

import Filters from './Filters'
import Form from './Form'
import List from './List'
import LoadingSpinner from './LoadingSpinner'

const Todos = ({filter}) => (
  <div className='Todos panel'>
    <Filters filter={filter || 'all'} />
    <Form />
    <List filter={filter || 'all'}/>
    <LoadingSpinner filter={filter || 'all'}/>
  </div>
)

Filters.propTypes = {
  filter: PropTypes.string.isRequired
}

export default Todos