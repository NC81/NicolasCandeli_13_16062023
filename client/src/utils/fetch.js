import { dataIsLoading } from '../features/profile'

export default async function fetchAPI(request, dispatch) {
  try {
    dispatch(dataIsLoading(true))
    const response = await fetch(request)
    console.log('response', response)
    const data = await response.json()
    if (response.ok) {
      dispatch(dataIsLoading(false))
      return data
    } else {
      console.log('!response.ok', response)
      throw response
    }
  } catch (err) {
    console.log('catch', err)
    dispatch(dataIsLoading(false))
    throw new Error('User not found')
  }
}
