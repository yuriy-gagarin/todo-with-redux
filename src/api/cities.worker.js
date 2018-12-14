import data from '../cities.json'

onmessage = message => {
  const { id, payload } = message.data
  const result = data.filter(value =>
    value.name.match(new RegExp(payload, 'gi'))
  )
  postMessage({
    id, result
  })
}