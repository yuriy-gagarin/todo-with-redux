import React from 'react'

const Error = ({ errorMessage, retryFetch }) => (
  <div className='no-todos slide-up' onClick={retryFetch}>
    <img alt='' src="https://img.icons8.com/material/48/000000/error-cloud.png" />
    <p className='slide-up'>Error! {errorMessage}</p>
    <p className='slide-up'>Click to retry</p>
  </div>
)

export default Error