import React, { useState } from 'react'
import { connect } from 'react-redux'

import { operations } from '@state/weather'
import { searchData } from '@api/cities'

const Form = ({fetchWeather, fetchWeatherById}) => {
  let input

  const [ac, setAc] = useState([])
  const [loading, setLoading] = useState(false)

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

  const onItemClick = (geonameid, name) => {
    input.value = name
    fetchWeatherById(geonameid)
  }

  const cities = ac.map(({name, geonameid, country, countryCode}) =>
    <li
      key={geonameid}
      onClick={() => onItemClick(geonameid, name)}
    >
      {name}, {country}
    </li>
  )

  return (
    <div className='form-wrapper'>
    <input
      className='Form'
      onKeyUp={handleKeyUp}
      ref={node => input = node}
      placeholder='type here...'
    />
    <ul style={{
      listStyle: 'none',
      fontSize: '0.7rem',
      fontWeight: '100',
      padding: 0,
      margin: 0,
    }}>
      {loading ? <li>Loading...</li> : cities}
    </ul>
    </div>
  )
}

export default connect(null, operations)(Form)