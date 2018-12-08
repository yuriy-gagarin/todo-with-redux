import data from '../world-cities_json.json'

onmessage = event => {
  const filtered = data.filter(value => value.name.match(new RegExp(event.data.query, 'gi')))
  postMessage({
    type: 'RESPONSE',
    filtered
  })
}