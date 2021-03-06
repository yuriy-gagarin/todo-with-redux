import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { operations } from '@state/todos'

const Links = ({filter, switchFilter, removeAllTodos}) => {
  const filterFor = filterName =>
    filter === filterName ? 'filter-link-current filter-link' : 'filter-link'
  return (
    <div className='Filters'>
      <Link
        to='#'
        className={filterFor('all')}
        onClick={() => switchFilter('all')}>
        All
      </Link>
      <Link
        to='#'
        className={filterFor('active')}
        onClick={() => switchFilter('active')}> 
        Active
      </Link>
      <Link
        to='#'
        className={filterFor('completed')}
        onClick={() => switchFilter('completed')}>
        Completed
      </Link>
      <Link
        to='#'
        className='filter-link'
        onClick={() => removeAllTodos()}
        style={{float: 'right'}}
        >
        Remove all
      </Link>
    </div>
  )
}

export default connect(null, operations)(Links)