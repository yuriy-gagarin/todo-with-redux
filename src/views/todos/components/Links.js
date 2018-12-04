import React from 'react'
import { Link } from 'react-router-dom'

const Links = ({filter, removeQueryParam, setQueryParam}) => {
  const filterFor = filterName =>
    ['filter-link', (filter === filterName ? 'filter-link-current' : '')].join(' ')
  return (
    <div className='Filters'>
      <Link
        className={filterFor('all')}
        to={{pathname: '/', search: removeQueryParam('filter')}}>
        All
      </Link>
      <Link
        className={filterFor('active')}
        to={{pathname: '/', search: setQueryParam('filter', 'active')}}> 
        Active
      </Link>
      <Link
        className={filterFor('completed')}
        to={{pathname: '/', search: setQueryParam('filter', 'completed')}}>
        Completed
      </Link>
    </div>
  )
}

export default Links