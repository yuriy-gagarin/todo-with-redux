/**
 * mock api for searching a list of cities
 */

import Worker from 'worker-loader!./cities.worker.js' // eslint-disable-line

const worker = new Worker()

export const searchData = query => {
  worker.postMessage({
    type: 'REQUEST',
    query
  })
  console.log(`posting ${query}`)
  return new Promise((resolve, reject) => {
    worker.onmessage = event => {
      return resolve(event.data.filtered)
    }
  })
}