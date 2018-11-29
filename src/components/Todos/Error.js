import React from 'react'

const Error = ({ errorMessage, retryFetch }) => (
  <div className='no-todos slide-up' onClick={retryFetch}>
    <img alt='' src="https://img.icons8.com/ios/100/000000/box-important.png" />
    <p className='slide-up'>Error! {errorMessage}</p>
    <p className='slide-up'>Click to retry</p>
  </div>
)

export default Error