import React from 'react'

const Form = ({cities, wrapperRef, handleKeyUp, handleChange, openList, inputRef, onItemClick, listOpen}) => {
  const _cities = cities.map(({name, geonameid, country}) =>
    <li
      key={geonameid}
      onClick={() => onItemClick(geonameid, name)}
    >
      {name}, {country}
    </li>
  )

  return (
    <div 
      className='form-wrapper'
      ref={wrapperRef}
    >
    <input
      className='Form'
      onKeyUp={handleKeyUp}
      onChange={handleChange}
      onClick={openList}
      ref={inputRef}
      placeholder='type here...'
    />
    {listOpen && <ul className='form-dropdown has-to-scroll'>
      {_cities}
    </ul>}    
    </div>
  )
}

export default Form