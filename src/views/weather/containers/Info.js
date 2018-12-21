import React from 'react'
import { connect } from 'react-redux'
import { operations } from '@state/weather'
import { selectors as get } from '@state/weather'

import Info from '../components/Info'
import Loading from '../components/Loading'
import WaitingForLocation from '../components/WaitingForLocation'

const InfoContainer = (props) => {
  const { scale, changeScale, isFetched, gettingLocation } = props
  const switchScale = () => {
    const cycle = scale => scale === 'C' ? 'F' : 'C'
    changeScale(cycle(scale))
  }
  return isFetched
    ? <Info {...{...props, switchScale}} /> 
    : gettingLocation
    ? <WaitingForLocation />
    : <Loading />
}

const selectors = state => ({
  isFetched:       get.isFetched(state),
  gettingLocation: get.gettingLocation(state),
  temp:            get.convertedTemperature(state),
  scale:           get.scale(state),
  name:            get.name(state),
  countryCode:     get.countryCode(state),
  clouds:          get.clouds(state),
  pressure:        get.pressure(state),
  humidity:        get.humidity(state),
  windSpeed:       get.windSpeed(state),
  windDirection:   get.windDirection(state),
  weather:         get.weather(state),
  lastFetchMethod: get.lastFetchMethod(state),
})

export default connect(selectors, operations)(InfoContainer)