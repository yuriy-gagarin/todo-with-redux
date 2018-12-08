import React from 'react'

const Error = ({message, query}) => (
  message ?
  <span key={message+query} className='ErrorMessage fade-out'>{`${message}:\xa0${query}`}</span> :
  null
)

export default Error