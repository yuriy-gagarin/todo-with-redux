import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { selectors as get } from '@state/weather'
import { operations } from '@state/weather'

import Info from './Info'
import Form from './Form'
import Spinner from '../components/Spinner'
import Error from '../components/Error'

const Weather = ({fetchWeather, isFetching, fetchError}) => {
  useEffect(() => {
    fetchWeather('Rostov-on-Don')
  }, [])

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
  fetchError: get.fetchError(state)
})

export default connect(selectors, operations)(Weather)