import React from 'react'
import { connect } from 'react-redux'
import { selectors as get } from '@state/weather'

import Info from '../components/Info'

const InfoContainer = (props) => (
  props.isFetched ? <Info {...props} /> : <span>Loading</span>
)

const selectors = state => ({
  isFetched:     get.isFetched(state),
  temp:          get.convertedTemperature(state),
  scale:         get.scale(state),
  name:          get.name(state),
  countryCode:   get.countryCode(state),
  clouds:        get.clouds(state),
  pressure:      get.pressure(state),
  humidity:      get.humidity(state),
  windSpeed:     get.windSpeed(state),
  windDirection: get.windDirection(state),
  weather:       get.weather(state),
})

export default connect(selectors)(InfoContainer)