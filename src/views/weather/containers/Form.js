import React, { useState, useEffect, useRef } from 'react' 
import { connect } from 'react-redux'
import { debounce } from 'lodash'
import { operations } from '@state/weather'
import { selectors as get } from '@state/weather'

const Form = ({cities, isFetching, fetchWeather, fetchWeatherById, searchCities}) => {
  let inputRef = useRef(null)
  let wrapperRef = useRef(null)

  const [listOpen, setListOpen] = useState(false)

  const handleClickOutside = e => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      hideList()
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () =>
      document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const debounced = debounce((value) => {
    if (value.trim().length >= 3) {
      searchCities(value.trim())
    }
  }, 500)

  const handleKeyUp = e => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (!inputRef.current.value.trim()) return
      fetchWeather(inputRef.current.value.trim())
      inputRef.current.value = ''
    }
  }

  const handleChange = e => {
    debounced(inputRef.current.value)
  }

  const openList = e => {
    setListOpen(true)
  }

  const hideList = e => {
    setListOpen(false)
  }

  const onItemClick = (geonameid, name) => {
    inputRef.current.value = name
    fetchWeatherById(geonameid)
  }

  const _cities = cities.map(({name, geonameid, country}) =>
    <li
      key={geonameid}
      onClick={() => onItemClick(geonameid, name)}
    >
      {name}, {country}
    </li>
  )

  return (
    <div 
      className='form-wrapper'
      ref={wrapperRef}
    >
    <input
      className='Form'
      onKeyUp={handleKeyUp}
      onChange={handleChange}
      onClick={openList}
      ref={inputRef}
      placeholder='type here...'
    />
    {listOpen && <ul className='form-dropdown'>
      {_cities}
    </ul>}    
    </div>
  )
}

const selectors = state => ({
  isFetching: get.isFetching(state),
  cities:     get.cities(state)
})

export default connect(selectors, operations)(Form)