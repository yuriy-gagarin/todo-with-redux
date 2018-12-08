import data from '../cities.json'

onmessage = event => {
  const filtered = data.filter(value => 
    value.name.match(new RegExp(event.data.query, 'gi')) ||
    value.country.match(new RegExp(event.data.query, 'gi'))
  )
  postMessage({
    type: 'RESPONSE',
    filtered
  })
}