import fetchAPI from '../utils/fetch'
import setStorage from '../utils/storage'
import { userLoginOrUpdate } from '../features/user'

export function handleLogin(e, email, password) {
  e.preventDefault()
  return async (dispatch, getState) => {
    const lastEmail =
      sessionStorage.getItem('ArgentBank-email') ||
      localStorage.getItem('ArgentBank-email', email)
    const lastPassword =
      sessionStorage.getItem('ArgentBank-password') ||
      localStorage.getItem('ArgentBank-password', password)
    const localStorageToken = localStorage.getItem('ArgentBank-token')
    console.log('lastEmail, lastPassword', lastEmail, lastPassword)

    if (
      !localStorageToken ||
      email !== lastEmail ||
      password !== lastPassword
    ) {
      const tokenRequest = new Request(
        'http://localhost:3001/api/v1/user/login',
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({ email: email, password: password }),
          // body: JSON.stringify({
          //   email: 'tony@stark.com',
          //   password: 'password123',
          // }),
        }
      )
      const loginData = await fetchAPI(
        tokenRequest,
        'login',
        dispatch,
        getState
      )

      if (getState().error.hasError) {
        return
      }

      const token = loginData.body.token
      localStorage.setItem('ArgentBank-token', token)
    }

    const dataRequest = new Request(
      'http://localhost:3001/api/v1/user/profile',
      {
        method: 'POST',
        // prettier-ignore
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('ArgentBank-token')}`,
        },
      }
    )
    const profileDataOrResponse = await fetchAPI(
      dataRequest,
      'login',
      dispatch,
      getState
    )
    console.log('profileData', profileDataOrResponse)

    if (getState().error.hasError) {
      return
    }

    setStorage(email, password, getState)

    const firstName = profileDataOrResponse.body.firstName
    const lastName = profileDataOrResponse.body.lastName
    dispatch(userLoginOrUpdate(firstName, lastName))
  }
}
