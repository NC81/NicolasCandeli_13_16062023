import fetchAPI from '../utils/fetch'
import { userLoginOrUpdate } from '../features/profile'

export function handleLogin(e, email, password) {
  e.preventDefault()
  return async (dispatch, getState) => {
    const localStorageToken = localStorage.getItem('token')
    console.log('localStorageToken', localStorageToken)

    if (!localStorageToken) {
      const tokenRequest = new Request(
        'http://localhost:3001/api/v1/user/login',
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          // body: JSON.stringify({ email: email, password: password }),
          body: JSON.stringify({
            email: 'tony@stark.com',
            password: 'password123',
          }),
        }
      )
      console.log('tokenRequest')
      const loginData = await fetchAPI(tokenRequest, dispatch)

      if (getState().error.hasError) {
        return
      }

      const token = loginData.body.token
      localStorage.setItem('token', token)
    }

    const dataRequest = new Request(
      'http://localhost:3001/api/v1/user/profile',
      {
        method: 'POST',
        // prettier-ignore
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      }
    )
    const profileDataOrResponse = await fetchAPI(dataRequest, dispatch)
    console.log('profileData', profileDataOrResponse)

    if (getState().error.hasError) {
      return
    }

    const firstName = profileDataOrResponse.body.firstName
    const lastName = profileDataOrResponse.body.lastName
    dispatch(userLoginOrUpdate(firstName, lastName))
  }
}
