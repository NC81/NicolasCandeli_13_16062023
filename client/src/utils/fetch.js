import { dataIsLoading } from '../features/tools'
import { errorUpdate } from '../features/error'

export default async function fetchAPI(request, location, dispatch, getState) {
  try {
    dispatch(dataIsLoading(true))
    getState().error.hasError && dispatch(errorUpdate(null, null, null))

    const response = await fetch(request)
    console.log('response', response)
    if (response.ok) {
      const data = await response.json()
      dispatch(dataIsLoading(false))
      return data
    } else {
      if (response.status === 401) {
        localStorage.removeItem('ArgentBank-token')
        sessionStorage.removeItem('ArgentBank-token')
      }
      dispatch(errorUpdate(location, response.status, response.statusText))
      dispatch(dataIsLoading(false))
    }
  } catch (err) {
    dispatch(errorUpdate(location, err.name, err.message))
    dispatch(dataIsLoading(false))
  }
}
