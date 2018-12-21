import React from 'react'

import { LoadingIconSmall } from '@views/shared/icons'

const Spinner = ({isFetching}) => (
  isFetching ?
  <LoadingIconSmall className='LoadingSpinner' /> :
  null
)

export default Spinner