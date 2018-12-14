import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { selectors as get } from '@state/todos'
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

const selectors = (state, {filter}) => ({
  isFetching:   get.isFetchingSomething(state),
  initialFetch: get.isInitialFetch(state),
  errorMessage: get.errorMessage(state, filter),
  items:        get.filteredTodos(state, filter)
})

export default connect(selectors, operations)(ListContainer)