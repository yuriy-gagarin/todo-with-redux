import React from 'react'
import { connect } from 'react-redux'

import Item from './Item'
import { toggleItem, removeItem } from '../actions';

const List = ({items, removeItem, toggleItem}) => (
  <ul className='List'>
    {items.map(
      item => (
        <Item key={item.id} {...item} onClick={(e) => {
          e.shiftKey ? removeItem(item.id) : toggleItem(item.id)
        }}/>
      )
    )}
  </ul>
)

const mapStateToProps = state => ({
  items: state
})

const mapDispatchToProps = dispatch => ({
  removeItem: id => dispatch(removeItem(id)),
  toggleItem: id => dispatch(toggleItem(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(List)