import React from 'react'

import { LoadingIcon } from '@views/shared/icons'

const Loading = () => (
  <div className='no-todos slide-up'>
    <LoadingIcon />
    <p className='loading-text slide-up'>Loading...</p>
  </div>
)

export default Loading