export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
    console.log('save state tolocalstorage', serializedState);
  } catch (err) {
    console.warn(err)
  }
}

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) {
      return undefined
    }
    console.log('state in local storage', serializedState)
    return JSON.parse(serializedState)
  } catch (err) {
    console.log('eror', err)
    return undefined
  }
}
