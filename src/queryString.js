import queryString from 'query-string'

export const setQueryParam = (key, value) => {
  const search = queryString.parse(document.location.search)
  return queryString.stringify({...search, [key]: value})
}

export const removeQueryParam = key => {
  const search = queryString.parse(document.location.search)
  return queryString.stringify({...search, [key]: undefined})
}