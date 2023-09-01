import { dataIsLoading } from '../features/user'
import { errorUpdate } from '../features/error'

export default async function fetchAPI(request, location, dispatch, getState) {
  try {
    dispatch(dataIsLoading(true))
    getState().error.hasError && dispatch(errorUpdate(null, null, null))
    const response = await fetch(request)
    if (response.ok) {
      const data = await response.json()
      return data
    } else {
      if (response.status === 401) {
        localStorage.removeItem('ArgentBank-token')
        sessionStorage.removeItem('ArgentBank-token')
      }
      dispatch(errorUpdate(location, response.status, response.statusText))
    }
  } catch (err) {
    dispatch(errorUpdate(location, err.name, err.message))
  } finally {
    dispatch(dataIsLoading(false))
  }
}
