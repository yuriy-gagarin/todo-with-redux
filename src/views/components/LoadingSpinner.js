import React from 'react'
import { connect } from 'react-redux'
import { selectors } from '../../state/todos'

const LoadingSpinner = ({isFetching, initialFetch}) => (
  (isFetching || initialFetch) ?
  <img className='LoadingSpinner spinning' alt='' src="https://img.icons8.com/material/48/000000/spinner-frame-4.png" /> :
  null
)

const mapStateToProps = (state, {filter}) => ({
  isFetching:   selectors.getIsFetchingSomething(state),
  initialFetch: selectors.getIsInitialFetch(state)
})

export default connect(mapStateToProps)(LoadingSpinner)