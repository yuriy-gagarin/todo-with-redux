import React from 'react'

const Info = ({isFetched, image, temp, desc, scale, name, countryCode}) => (
  <div className='Info slide-up'>
    <h1 className='weather-title'>{`${name},\xa0${countryCode}`}</h1>
    <div className='weather-data'>
      <img className='weather-icon' alt=''
        src={image ? `http://openweathermap.org/img/w/${image}.png` : ''} />
      <div className='weather-info'>
        <p className='temperature'>{temp ? `${temp}°${scale}` : '\xa0'}</p>
        <p>{desc ? desc : '\xa0'}</p>
        <p>Clouds 90%</p>
        <p>Humidity 81%</p>
        <p>Wind SW 100m/s</p>
        <p>Atm pressure 1000hmp</p>
      </div>
    </div>
  </div>
)

export default Info