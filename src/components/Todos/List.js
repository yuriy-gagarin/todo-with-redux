import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Item from './Item'
import NoItems from './NoItems'
import * as actions from '../../actions'
import { getFilteredTodos } from '../../reducers'

const List = ({items, filter, handleClick}) => (
  items.length ?
  <ul className='List slideup'>{
    items.map(
      item => <Item {...item} key={item.id} onClick={e => handleClick(e, item.id)} />
    )
  }</ul> :
  <NoItems filter={filter} />
)

const ListContainer = ({fetchItems, removeItem, toggleItem, items, filter}) => {
  // this useEffect runs every time the `filter` prop changes
  useEffect(() => {
    fetchItems(filter)
  }, [filter])

  const handleClick = (e, id) => {
    e.shiftKey ? removeItem(id) : toggleItem(id)
  }

  return <List {...{items, filter, handleClick}} />
}

const mapStateToProps = (state, {filter}) => ({
  items: getFilteredTodos(state, filter)
})

export default connect(mapStateToProps, actions)(ListContainer)