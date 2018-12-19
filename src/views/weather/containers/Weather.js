import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { selectors as get } from '@state/weather'
import { operations } from '@state/weather'

import Info from './Info'
import Form from './Form'
import Spinner from '../components/Spinner'
import Error from '../components/Error'

const Weather = ({fetchWeather, isFetching, userCoords, fetchError, getCurrentLocation, fetchWeatherByCoords}) => {
  useEffect(() => {
    getCurrentLocation()
  }, [])

  useEffect(() => {
    if (userCoords.latitude === null || userCoords.longitude === null) return
    fetchWeatherByCoords(userCoords)
  }, [userCoords])

  return (
    <div className='Weather panel'>
      <Info />
      <Form {...{fetchWeather}} />
      <Spinner {...{isFetching}} />
      <Error {...fetchError} />
    </div>
  )
}

const selectors = state => ({
  isFetching: get.isFetching(state),
  fetchError: get.fetchError(state),
  userCoords: get.userCoords(state)
})

export default connect(selectors, operations)(Weather)