import { createActions, combineActions } from 'redux-actions'
import { flatten } from 'flat'

export const { weather } = createActions({
  WEATHER: {
    FETCH: {
      REQUEST: query => ({ query }),
      SUCCESS: response => flatten(response),
      ERROR: (query, error) => ({ query, error })
    },
    UPDATE_KEY: key => ({ key }),
    SET_SCALE: scale => ({ scale })
  }
})