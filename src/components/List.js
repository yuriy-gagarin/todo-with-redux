import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Item from './Item'
import { toggleItem, removeItem } from '../actions';

const List = ({items, removeItem, toggleItem}) => {
  return (
    <ul className='List slide-up'>
      {items.map(
        item => (
          <Item key={item.id} {...item} onClick={(e) => {
            e.shiftKey ? removeItem(item.id) : toggleItem(item.id)
          }}/>
        )
      )}
    </ul>
  )
}

const filterList = (items, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return items
    case 'SHOW_ACTIVE':
      return items.filter(item => !item.completed)
    case 'SHOW_COMPLETED':
      return items.filter(item => item.completed)
    default:
      return items
  }
}

const mapStateToProps = state => ({
  items: filterList(state.todos, state.filter)
})

const mapDispatchToProps = dispatch => ({
  removeItem: id => dispatch(removeItem(id)),
  toggleItem: id => dispatch(toggleItem(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(List)