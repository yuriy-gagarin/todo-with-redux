import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Item from './Item'
import NoItems from './NoItems'
import Loading from './Loading'
import Error from './Error'
import * as actions from '../../actions'
import { getFilteredTodos, getIsFetching, getErrorMessage } from '../../reducers'

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
  const {isFetching, errorMessage, items, filter} = props

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

  if ( isFetching && !items.length ) {
    return <Loading />
  } 

  return <List {...{items, filter, handleClick}} />
}

const mapStateToProps = (state, {filter}) => ({
  items: getFilteredTodos(state, filter),
  isFetching: getIsFetching(state, filter),
  errorMessage: getErrorMessage(state, filter)
})

export default connect(mapStateToProps, actions)(ListContainer)