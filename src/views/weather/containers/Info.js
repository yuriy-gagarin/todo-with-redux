import React from 'react'
import { connect } from 'react-redux'
import { selectors as get } from '@state/weather'
import { operations } from '@state/weather'

import { toCelsius, toFahrenheit } from '@utils/tempScales'

import Loading from '../components/Loading'
import Info from '../components/Info'

const InfoContainer = (props) => {
  const { temp, scale, ...rest } = props
  const convertTemp = scale === 'C' ? toCelsius : scale === 'F' ? toFahrenheit : i => i
  return props.isFetched ? <Info {...rest} {...{temp: convertTemp(temp), scale}} /> : <Loading />
}

const selectors = (state, {scale}) => ({
  isFetched:   get.isFetched(state),
  temp:        get.convertedTemperature(state, scale),
  scale:       get.scale(state),
  name:        get.name(state),
  countryCode: get.countryCode(state),
  clouds:      get.clouds(state),
  pressure:    get.pressure(state),
  humidity:    get.humidity(state),
  windSpeed:   get.windSpeed(state),
  weather:     get.weather(state)
})

export default connect(selectors, operations)(InfoContainer)