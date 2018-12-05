import React from 'react'
import { connect } from 'react-redux'
import { selectors } from '@state/weather'
import { operations } from '@state/weather'

import Loading from '../components/Loading'
import Info from '../components/Info'

const InfoContainer = (props) => {
  return props.isFetched ? <Info {...props} /> : <Loading />
}

const props = state => ({
  isFetched:   selectors.getIsFetched(state),
  image:       selectors.getWeatherImage(state),
  temp:        selectors.getTemperature(state),
  desc:        selectors.getWeatherDesc(state),
  scale:       selectors.getTempScale(state),
  name:        selectors.getLocationName(state),
  countryCode: selectors.getCountryCode(state)
})

export default connect(props, operations)(InfoContainer)