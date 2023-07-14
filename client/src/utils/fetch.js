import { dataIsLoading, errorUpdate } from '../features/profile'

export default async function fetchAPI(request, dispatch) {
  try {
    dispatch(dataIsLoading(true))
    dispatch(errorUpdate(false, null, null))
    const response = await fetch(request)
    console.log('response', response)
    if (response.ok) {
      const data = await response.json()
      dispatch(dataIsLoading(false))
      return data
    } else {
      dispatch(errorUpdate(true, response.status, response.statusText))
      dispatch(dataIsLoading(false))
    }
  } catch (err) {
    dispatch(errorUpdate(true, err.name, err.message))
    dispatch(dataIsLoading(false))
  }
}
