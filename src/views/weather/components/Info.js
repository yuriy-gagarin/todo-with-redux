import React from 'react'

const makeIcon = id => `http://openweathermap.org/img/w/${id}.png`

const Info = ({temp, scale, name, countryCode, weather, clouds, humidity, pressure, windSpeed, windDirection}) => (
  <div className='Info slide-up'>
    <div className='weather-title'>{`${name},\xa0${countryCode}`}</div>
    <div className='weather-data'>
      <div className='weather-temp'>{`${temp}°${scale}`}</div>
      <div className='weather-misc'>
        <span>{`Clouds:\xa0${clouds}%`}</span>
        <span>{`Humidity:\xa0${humidity}%`}</span>
        <span>{`Pressure:\xa0${pressure} hPa`}</span>
        <span>{`Wind Speed:\xa0${windSpeed} m/sec`}</span>
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