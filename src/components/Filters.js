import React from 'react'
import { Link } from 'react-router-dom'
import { setQueryParam, removeQueryParam } from '../queryString'

const Filters = () => (
  <div className='Filters'>
    <Link to={{pathname: '/', search: removeQueryParam('filter')}} > All </Link>
    <Link to={{pathname: '/', search: setQueryParam('filter', 'active')}} > Active </Link>
    <Link to={{pathname: '/', search: setQueryParam('filter', 'completed')}} > Completed </Link>
  </div>  
)

export default Filters