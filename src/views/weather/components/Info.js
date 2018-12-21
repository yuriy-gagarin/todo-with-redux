import React from 'react'
import { getFullName } from '@api/countries'

const makeIcon = id => `https://openweathermap.org/img/w/${id}.png`

const Info = props => {
  const {
    temp, scale, name, countryCode, weather, clouds, 
    humidity, pressure, windSpeed, windDirection, switchScale
  } = props
  return (
    <div key={name+countryCode} className='Info slide-up'>
      <div className='weather-title'>{`${name},\xa0${getFullName(countryCode)}`}</div>
      <div className='weather-data'>
        <div className='weather-temp' onClick={switchScale}>{`${temp}°${scale}`}</div>
        <div className='weather-misc'>
          <div>{`Clouds:\xa0${clouds}%`}</div>
          <div>{`Humidity:\xa0${humidity}%`}</div>
          <div>{`Pressure:\xa0${pressure}\xa0hPa`}</div>
          <div>
            <span>{`Wind:\xa0${windSpeed}\xa0m/s\xa0`}</span>
            {windDirection 
              ? <span className='wind-direction' style={{transform: 'rotate(' + windDirection + 'deg)'}}>{'↓'}</span>
              : null
            }
          </div>
        </div>
      </div>
      <div className='weather-cards'>
        {weather.map(({id, main, description, icon}) =>
          <div  key={id} className='weather-card'>
            <img alt={description} src={makeIcon(icon)}></img>
            <span className='weather-desc-title'>{main}</span>
            <span className='weather-desc'>{description}</span>
          </div>
        )}
      </div>
    </div>
  )
}
export default Info
