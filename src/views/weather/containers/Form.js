import React, { useState, useEffect, useRef } from 'react' 
import { connect } from 'react-redux'
import { debounce } from 'lodash'
import { operations } from '@state/weather'
import { selectors as get } from '@state/weather'

import Form from '../components/Form'

const FormContainer = ({cities, isFetching, fetchWeather, fetchWeatherById, searchCities}) => {
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
  }, 200, { leading: true })

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

  return <Form {...{cities, wrapperRef, handleKeyUp, handleChange, openList, inputRef, onItemClick, listOpen}} />
}

const selectors = state => ({
  isFetching: get.isFetching(state),
  cities:     get.cities(state)
})

export default connect(selectors, operations)(FormContainer)