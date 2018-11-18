import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions'

const Form = ({dispatch}) => {
  let input

  const handleKeyDown = e => {
    if (e.key !== 'Enter') return
    e.preventDefault()
    if (!input.value.trim()) return
    dispatch(addItem(input.value))
    input.value = ''
  }

  return (
    <input
      className='Form'
      onKeyDown={handleKeyDown}
      ref={node => input = node}
      placeholder='type here...'
    />
  )
}

export default connect()(Form)