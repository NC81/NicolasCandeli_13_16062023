import { dataIsLoading } from '../features/user'
import { errorUpdate } from '../features/error'

export default async function fetchAPI(request, dispatch, getState) {
  try {
    dispatch(dataIsLoading(true))
    if (getState().error.hasError) {
      dispatch(errorUpdate(false, null, null))
    }
    const response = await fetch(request)
    console.log('response', response)
    if (response.ok) {
      const data = await response.json()
      dispatch(dataIsLoading(false))
      return data
    } else {
      if (response.status === 401) {
        localStorage.removeItem('token')
      }
      dispatch(errorUpdate(true, response.status, response.statusText))
      dispatch(dataIsLoading(false))
    }
  } catch (err) {
    dispatch(errorUpdate(true, err.name, err.message))
    dispatch(dataIsLoading(false))
  }
}
