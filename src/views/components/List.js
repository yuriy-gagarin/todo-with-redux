import React from 'react'

import Item from '../components/Item'
import Error from '../components/Error'
import Loading from '../components/Loading'
import NoItems from '../components/NoItems'

const List = ({items, handleClick, errorMessage, retryFetch, isFetching, initialFetch, filter}) => {
  if (items.length) {
    const _items = items.map(
      item => <Item {...item} key={item.id} onClick={e => handleClick(e, item.id)} />
    )
    return <ul className='List slideup'>{_items}</ul>
  } else {
    if (errorMessage)
      return <Error {...{errorMessage, retryFetch}}/>
    if (isFetching || initialFetch)
      return <Loading />
    return <NoItems filter={filter} />
  }
}

export default List