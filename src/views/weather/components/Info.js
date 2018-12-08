import React from 'react'

const makeIcon = id => `http://openweathermap.org/img/w/${id}.png`

const Info = ({temp, scale, name, countryCode, weather, clouds, humidity, pressure, windSpeed, windDirection}) => (
  <div key={name} className='Info slide-up'>
    <div className='weather-title'>{`${name},\xa0${countryCode}`}</div>
    <div className='weather-data'>
      <div className='weather-temp'>{`${temp}°${scale}`}</div>
      <div className='weather-misc'>
        <div>{`Clouds:\xa0${clouds}%`}</div>
        <div>{`Humidity:\xa0${humidity}%`}</div>
        <div>{`Pressure:\xa0${pressure}\xa0hPa`}</div>
        <div>
          <span>{`Wind:\xa0${windSpeed}\xa0m/s`}</span>
          {windDirection 
            ? <span style={{transform: 'rotate(' + windDirection + 'deg)'}}>↓</span>
            : null
          }
        </div>
      </div>
    </div>
    <div className='weather-cards'>
      {weather.map(({id, main, description, icon}) =>
        <div key={id} className='weather-card'>
          <img alt={description} src={makeIcon(icon)}></img>
          <span className='weather-desc-title'>{main}</span>
          <span className='weather-desc'>{description}</span>
        </div>
      )}
    </div>
  </div>
)

export default Info