import React from 'react'
import PropTypes from 'prop-types'

const Item = ({text, completed, onClick}) => (
  <li
    style={{
      textDecoration: completed ? 'line-through' : 'none',
      color: completed ? 'red' : 'black'
    }}
    onClick={onClick}
  >
    {text}
  </li>
)

Item.propTypes = {
  text:      PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onClick:   PropTypes.func.isRequired
}

export default Item