import React, { useEffect } from 'react'
import { connect } from 'react-redux'
// import { selectors } from 'state/weather'
import { operations } from 'state/weather'

const WeatherContainer = ({fetchWeather}) => {
  useEffect(() => {
    fetchWeather('Rostov-on-Don')
  }, [])
  return (
    <div className='Weather panel'>
      NYI
    </div>
  )
}

export default connect(null, operations)(WeatherContainer)