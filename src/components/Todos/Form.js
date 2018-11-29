import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addItem } from '../../actions'

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

export default connect(null, {addItem})(Form)