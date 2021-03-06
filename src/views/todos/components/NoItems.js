import React from 'react'

const NoItems = ({filter}) => (
  <div className='no-todos slide-up'>
    <img alt='' src="https://img.icons8.com/material/48/000000/task.png" />
    <p key={filter} className='slide-up'>You have no {filter !== 'all' ? `${filter} ` : ''}todos!</p>
  </div>
)

export default NoItems