import { createActions } from 'redux-actions'
import flatten from '@utils/flatten'
import combineActions from '@utils/combineActions'

const fetchMap = {
  REQUEST: query => ({ query }),
  SUCCESS: response => flatten(response),
  ERROR: (query, error) => ({ query, ...error })
}

export const { weather } = createActions({
  WEATHER: {
    FETCH: {
      NAME: fetchMap,
      ID: fetchMap,
      COORDS: fetchMap
    },
    CITIES: {
      REQUEST: query => ({ query }),
      SUCCESS: response => response,
      ERROR: (query, error) => ({ query, ...error })
    },
    LOCATION: {
      REQUEST: query => ({ query }),
      SUCCESS: response => response,
      ERROR: error => error
    },
    UPDATE_KEY: key => ({ key }),
    SET_SCALE: scale => ({ scale })
  }
})

export const fetchRequest = combineActions(
  weather.fetch.name.request,
  weather.fetch.id.request,
  weather.fetch.coords.request
)

export const fetchSuccess = combineActions(
  weather.fetch.name.success,
  weather.fetch.id.success,
  weather.fetch.coords.success
)

export const fetchError = combineActions(
  weather.fetch.name.error,
  weather.fetch.id.error,
  weather.fetch.coords.error
)