export const loadState = (key) => {
  try {
    const serializedState = localStorage.getItem(key)
    if (serializedState === null) return
    return JSON.parse(serializedState)
  } catch (e) {
    return
  }
}

export const saveState = (key, state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(key, serializedState)
  } catch (e) {
    return
  }
}
