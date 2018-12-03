import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { operations } from '../../state/todos'

const Form = ({addItem}) => {
  let input

  const handleKeyDown = e => {
    if (e.key !== 'Enter') return
    e.preventDefault()
    if (!input.value.trim()) return
    addItem(input.value)
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

Form.propTypes = {
  addItem: PropTypes.func.isRequired
}

export default connect(null, operations)(Form)