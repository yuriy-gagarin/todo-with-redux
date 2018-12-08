import React, { useState } from 'react'

import { searchData } from '@api/cities.js'

import Spinner from './Spinner'

const Form = ({fetchWeather}) => {
  let input

  const [ac, setAc] = useState([])
  const [loading, setLoading] = useState(false)
  const [loaded, setLoaded] = useState(false)

  const handleKeyUp = e => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (!input.value.trim()) return
      fetchWeather(input.value.trim())
      input.value = ''
    } else if (e.key.match(/^[a-zA-Z]$/)) {
      console.log(e.key)
      if (input.value.trim().length >= 3)
        if (!loading) {
          setLoading(true)
          searchData(input.value.trim())
          .then(data => {
            setAc(data)
            setLoading(false)
          })
        }
    }
  }

  const cities = ac.map(({name, geonameid, country}) => <li key={geonameid}>{name}, {country}</li>)

  return (
    <div style={{
      position: 'relative',
      textAlign: 'center'
    }}>
    <input
      className='Form'
      onKeyUp={handleKeyUp}
      ref={node => input = node}
      placeholder='type here...'
    />
    <ul style={{
      listStyle: 'none',
      fontSize: '0.8rem',
      fontWeight: '100',
      padding: 0,
      margin: 0,
    }}>
      {loading ? <li>Loading...</li> : cities}
    </ul>
    </div>
  )
}

export default Form