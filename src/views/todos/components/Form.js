import React from 'react'

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

export default Form