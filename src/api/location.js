export const getLocation = () => {
  if (typeof navigator === 'undefined' || !navigator.geolocation)
    return Promise.reject(Error('geolocation api is not available'))
  return new Promise((resolve, reject) => (
    navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      error => reject(error),
      {timeout: 5000}
    )
  ))
}