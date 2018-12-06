import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { selectors as get } from '@state/weather'
import { operations } from '@state/weather'

import Spinner from '../components/Spinner'
import Info from './Info'
import Form from '../components/Form'

const Weather = ({fetchWeather, isFetching}) => {
  useEffect(() => {
    fetchWeather('Rostov-on-Don')
  }, [])

  const retryFetch = () => {
    fetchWeather('New York')
  }

  return (
    <div className='Weather panel'>
      <Info />
      <div>
      <Form {...{fetchWeather}}/>
      <button 
        style={{width: '50px'}}
        onClick={() => retryFetch()}>refetch</button>
      </div>
      <Spinner {...{isFetching}} />
    </div>
  )
}

const selectors = state => ({
  isFetching: get.isFetching(state)
})

export default connect(selectors, operations)(Weather)