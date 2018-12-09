import React, { useState } from 'react'
import { connect } from 'react-redux'

import { debounce } from 'lodash'

import { operations } from '@state/weather'
import { searchData } from '@api/cities'

const Form = ({fetchWeather, fetchWeatherById}) => {
  let input

  const [ac, setAc] = useState([])
  const [loading, setLoading] = useState(false)

  const debounced = debounce((value) => {
    if (value.trim().length >= 3) {
      setLoading(true)
      searchData(value.trim())
      .then(data => {
        setAc(data)
        setLoading(false)
      })
    }
  }, 500)

  const handleKeyUp = e => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (!input.value.trim()) return
      fetchWeather(input.value.trim())
      input.value = ''
    }
  }

  const handleChange = e => {
    setLoading(true)
    debounced(input.value)
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
      onChange={handleChange}
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