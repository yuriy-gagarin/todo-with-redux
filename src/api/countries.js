import data from '../countries.json'

export const getFullName = code => (
  data[code]
)