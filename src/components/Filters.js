import React from 'react'
import Link from './Link'

const Filters = () => (
  <div className='Filters'>
    <Link filter='SHOW_ALL' > All </Link>
    <Link filter='SHOW_ACTIVE' > Active </Link>
    <Link filter='SHOW_COMPLETED' > Completed </Link>
  </div>  
)

export default Filters