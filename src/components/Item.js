import React from 'react'

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

export default Item