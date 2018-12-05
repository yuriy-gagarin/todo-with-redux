import React from 'react'

const Spinner = ({isFetching}) => (
  isFetching ?
  <img className='LoadingSpinner spinning' alt=''
    src="https://img.icons8.com/material/48/000000/spinner-frame-4.png" /> :
  null
)

export default Spinner