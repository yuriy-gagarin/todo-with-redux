import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../actions' 

const Link = ({ active, children, onClick }) => {
  return (
    <button
      style={{color: active ? 'red' : 'black'}}
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </button>
  )
}

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.filter 
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick() {
    dispatch(setFilter(ownProps.filter))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Link)