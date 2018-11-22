import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { setQueryParam, removeQueryParam } from '../../queryString'

const Filters = ({filter}) => (
  <div className='Filters'>
    <Link
      className={'filter-link ' + (filter === 'all' ? 'filter-link-current' : '')}
      to={{pathname: '/', search: removeQueryParam('filter')}}
    >
      All
    </Link>
    <Link
      className={'filter-link ' + (filter === 'active' ? 'filter-link-current' : '')}
      to={{pathname: '/', search: setQueryParam('filter', 'active')}}
    > 
      Active
    </Link>
    <Link
      className={'filter-link ' + (filter === 'completed' ? 'filter-link-current' : '')}
      to={{pathname: '/', search: setQueryParam('filter', 'completed')}}
    >
      Completed
    </Link>
  </div>  
)

export default withRouter(Filters)