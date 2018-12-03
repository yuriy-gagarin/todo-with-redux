import React from 'react'
import { connect } from 'react-redux'
import { selectors } from '../../state/todos'
import { operations } from '../../state/todos'
import { setQueryParam, removeQueryParam } from '../../queryString'

import List from './List'
import Form from '../components/Form'
import Links from '../components/Links'
import Spinner from '../components/Spinner'

const Todos = ({isFetching, initialFetch, filter, removeQueryParam, setQueryParam, addItem}) => {
  return (
    <div className='Todos panel'>
      <List {...{filter}} />
      <Form {...{addItem}} />
      <Links {...{filter, removeQueryParam, setQueryParam}} />
      <Spinner {...{isFetching, initialFetch}} />
    </div>
  )
}

const mapStateToProps = (state, {filter}) => ({
  isFetching:       selectors.getIsFetchingSomething(state),
  initialFetch:     selectors.getIsInitialFetch(state),
  setQueryParam:    setQueryParam,
  removeQueryParam: removeQueryParam
})

export default connect(mapStateToProps, operations)(Todos)