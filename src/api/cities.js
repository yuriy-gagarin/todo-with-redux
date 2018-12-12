/**
 * mock api for searching a list of cities
 */

import Worker from 'worker-loader!./cities.worker.js' // eslint-disable-line
import createWorker from '@utils/createWorker'

const dispatch = createWorker(Worker)

export const searchCities = query => {
  return dispatch(query)
}