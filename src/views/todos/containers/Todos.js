import React from 'react'
import { connect } from 'react-redux'
import { selectors as get } from '@state/todos'
import { operations } from '@state/todos'

import List from './List'
import Form from '../components/Form'
import Links from './Links'
import Spinner from '../components/Spinner'

const Todos = ({isFetching, initialFetch, filter, addItem}) => {
  return (
    <div className='Todos panel'>
      <Links {...{filter}} />
      <Form {...{addItem}} />
      <List {...{filter}} />
      <Spinner {...{isFetching, initialFetch}} />
    </div>
  )
}

const selectors = state => ({
  isFetching:       get.isFetchingSomething(state),
  initialFetch:     get.isInitialFetch(state),
  filter:           get.filter(state)
})

export default connect(selectors, operations)(Todos)