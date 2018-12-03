import React from 'react'
import { connect } from 'react-redux'
import { selectors } from '../../state/todos'
import { operations } from '../../state/todos'
import { setQueryParam, removeQueryParam } from '../../queryString'

import List from '../components/List'
import Form from '../components/Form'
import Links from '../components/Links'
import Spinner from '../components/Spinner'

const Todos = (props) => (
  <div className='Todos panel'>
    <List {...props} />
    <Form {...props} />
    <Links {...props} />
    <Spinner {...props} />
  </div>
)

const mapStateToProps = (state, {filter}) => ({
  isFetching:       selectors.getIsFetchingSomething(state),
  initialFetch:     selectors.getIsInitialFetch(state),
  errorMessage:     selectors.getErrorMessage(state, filter),
  items:            selectors.getFilteredTodos(state, filter),
  setQueryParam:    setQueryParam,
  removeQueryParam: removeQueryParam
})

export default connect(mapStateToProps, operations)(Todos)