import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Item from './Item'
import NoItems from './NoItems'
import Loading from './Loading'
import Error from './Error'

import { operations, selectors } from '../../state/todos'

const List = ({items, filter, handleClick}) => (
  items.length ?
  <ul className='List slideup'>{
    items.map(
      item => <Item {...item} key={item.id} onClick={e => handleClick(e, item.id)} />
    )
  }</ul> :
  <NoItems filter={filter} />
)

const ListContainer = (props) => {
  const {fetchItems, removeItem, toggleItem} = props
  const {isFetching, initialFetch, errorMessage, items, filter} = props

  useEffect(() => {
    fetchItems(filter)
  }, [filter])

  const handleClick = (e, id) => {
    e.shiftKey ? removeItem(id) : toggleItem(id)
  }

  const retryFetch = () => {
    fetchItems(filter)
  }

  if ( errorMessage && !items.length ) {
    return <Error {...{errorMessage, retryFetch}}/>
  }

  if ( (isFetching || initialFetch) && !items.length ) {
    return <Loading />
  } 

  return <List {...{items, filter, handleClick}} />
}

const mapStateToProps = (state, {filter}) => ({
  items:        selectors.getFilteredTodos(state, filter),
  isFetching:   selectors.getIsFetchingByFilter(state, filter),
  errorMessage: selectors.getErrorMessage(state, filter),
  initialFetch: selectors.getIsInitialFetch(state)
})

export default connect(mapStateToProps, operations)(ListContainer)