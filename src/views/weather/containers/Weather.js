import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { selectors } from '@state/weather'
import { operations } from '@state/weather'

import Form from '../components/Form'
import Spinner from '../components/Spinner'
import Info from './Info'

const Weather = ({fetchWeather, isFetching}) => {
  useEffect(() => {
    fetchWeather('Rostov-on-Don')
  }, [])

  const retryFetch = () => {
    fetchWeather('Rostov-on-Don')
  }

  return (
    <div className='Weather panel'>
      <Info />
      <button 
        style={{width: '50px'}}
        onClick={() => retryFetch()}>refetch</button>
      <Spinner {...{isFetching}} />
      {/* <Form {...{fetchWeather}}/> */}
    </div>
  )
}

const props = state => ({
  isFetching: selectors.getIsFetching(state)
})

export default connect(props, operations)(Weather)