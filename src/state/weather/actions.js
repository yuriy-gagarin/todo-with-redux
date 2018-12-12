import { createActions, combineActions } from 'redux-actions'
import { normalize, schema } from 'normalizr'
import flatten from '@utils/flatten'

export const { weather } = createActions({
  WEATHER: {
    FETCH: {
      REQUEST: query => ({ query }),
      SUCCESS: response => flatten(response),
      ERROR: (query, error) => ({ query, ...error })
    },
    CITIES: {
      REQUEST: query => ({ query }),
      SUCCESS: response => response,
      ERROR: (query, error) => ({ query, ...error })
    },
    UPDATE_KEY: key => ({ key }),
    SET_SCALE: scale => ({ scale })
  }
})