import fetchAPI from '../utils/fetch'
import { isLoading, userLoginOrUpdate } from '../features/profile'

export function handleLogin(e, email, password) {
  return async (dispatch) => {
    e.preventDefault()
    // dispatch(isLoading(true))

    const loginRequest = new Request(
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
    const loginData = await fetchAPI(loginRequest)
    const token = loginData.body.token
    localStorage.setItem('token', token)

    const profileRequest = new Request(
      'http://localhost:3001/api/v1/user/profile',
      {
        method: 'POST',
        // prettier-ignore
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      }
    )
    const data = await fetchAPI(profileRequest)
    const firstName = data.body.firstName
    const lastName = data.body.lastName
    dispatch(userLoginOrUpdate(firstName, lastName))
    // dispatch(isLoading(false))
    console.log('profileData', data)

    return data
  }
}
