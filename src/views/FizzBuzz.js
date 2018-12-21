import React, { useState } from 'react'
import { range } from 'lodash'

const useFizzBuzz = num => {
  const [state, setState] = useState(num)

  const fizz = val => (
    val % 3 === 0 && val % 5 === 0 
    ? 'FizzBuzz'
    : val % 3 === 0 
    ? 'Fizz'
    : val % 5 === 0 
    ? 'Buzz'
    : val
  )

  function createFizzBuzz(num) {
    return range(1, num+1).map(val => (
      <li key={val}>{fizz(val)}</li>
    ))
  }

  return [createFizzBuzz(state), setState]
}

const FizzBuzz = () => {
  const [fizzBuzz, setFizzBuzz] = useFizzBuzz(20)

  return (
    <div className='FizzBuzz panel'>
      <input className='Form' type='number' onChange={e => setFizzBuzz(+e.target.value)} defaultValue='20' />
      <ul className=''>{fizzBuzz}</ul>
    </div>
  )
}

export default FizzBuzz
