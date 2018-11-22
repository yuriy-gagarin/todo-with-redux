import React from 'react'
import { connect } from 'react-redux'

import Item from './Item'
import NoItems from './NoItems'
import { toggleItem, removeItem } from '../../actions'
import { getFilteredTodos } from '../../reducers'

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
    <NoItems filter={filter} />
  )
}

const mapStateToProps = (state, {filter}) => ({
  items: getFilteredTodos(state, filter)
})

export default connect(mapStateToProps, {removeItem, toggleItem})(List)