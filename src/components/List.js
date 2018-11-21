import React from 'react'
import { connect } from 'react-redux'

import Item from './Item'
import { toggleItem, removeItem } from '../actions'

const List = ({items, filter, removeItem, toggleItem}) => {
  const handleClick = (e, id) => e.shiftKey ? removeItem(id) : toggleItem(id)

  const _items = items.map(
    item => <Item {...item} key={item.id} onClick={e => handleClick(e, item.id)} />
  )

  return (
    _items.length ?
    <ul className='List slide-up'>
      {_items}
    </ul> :
    <div className='no-todos slide-up'>
      <img alt='' src="https://img.icons8.com/ios/100/000000/task.png" />
      <p>You have no {filter !== 'all' ? `${filter} ` : ''}todos!</p>
    </div>
  )
}

const filterList = (items, filter) => {
  switch (filter) {
    case 'all':
      return items
    case 'active':
      return items.filter(item => !item.completed)
    case 'completed':
      return items.filter(item => item.completed)
    default:
      return items
  }
}

const mapStateToProps = ({todos}, {filter}) => ({
  items: filterList(todos, filter)
})

const mapDispatchToProps = dispatch => ({
  removeItem: id => dispatch(removeItem(id)),
  toggleItem: id => dispatch(toggleItem(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(List)