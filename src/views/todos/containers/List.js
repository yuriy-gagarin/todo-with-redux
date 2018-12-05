import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { selectors } from '@state/todos'
import { operations } from '@state/todos'

import List from '../components/List'

const ListContainer = (props) => {
  const {fetchItems, removeItem, toggleItem, filter, ...rest} = props

  useEffect(() => {
    fetchItems(filter)
  }, [filter])

  const handleClick = (e, id) => {
    e.shiftKey ? removeItem(id) : toggleItem(id)
  }

  const retryFetch = () => {
    fetchItems(filter)
  }
  
  return <List {...{filter, handleClick, retryFetch, ...rest}} />
}

const props = (state, {filter}) => ({
  isFetching:   selectors.getIsFetchingSomething(state),
  initialFetch: selectors.getIsInitialFetch(state),
  errorMessage: selectors.getErrorMessage(state, filter),
  items:        selectors.getFilteredTodos(state, filter)
})

export default connect(props, operations)(ListContainer)