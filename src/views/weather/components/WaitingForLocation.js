import React from 'react'

import { LocationIcon } from '@views/shared/icons'

const WaitingForLocation = (props) => (
  <div className='no-todos slide-up'>
    <LocationIcon />
    <p className='loading-text slide-up'>Getting your location...</p>
  </div>
)

export default WaitingForLocation