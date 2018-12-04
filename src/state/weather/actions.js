import { createActions, combineActions } from 'redux-actions'

export const { weather } = createActions({
  WEATHER: {
    FETCH: {
      REQUEST: query => ({ query }),
      SUCCESS: response => ({ ...response }),
      ERROR: (query, error) => ({ query, error })
    },
    UPDATE_KEY: key => ({ key })
  }
})