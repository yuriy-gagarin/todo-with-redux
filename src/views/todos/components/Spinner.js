import React from 'react'

import { LoadingIconSmall } from '@views/shared/icons'

const Spinner = ({isFetching, initialFetch}) => (
  (isFetching || initialFetch) ?
  <LoadingIconSmall /> :
  null
)

export default Spinner