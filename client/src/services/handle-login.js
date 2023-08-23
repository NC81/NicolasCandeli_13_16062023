import fetchAPI from '../utils/fetch'
import { userLoginOrUpdate } from '../features/user'
import { tokenStorage, setTokenStorage } from '../utils/token-storage'

export function handleLogin(e, email, password) {
  e.preventDefault()

  return async (dispatch, getState) => {
    if (!tokenStorage()) {
      console.log('API')
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
      setTokenStorage(token, getState)
    }

    const dataRequest = new Request(
      'http://localhost:3001/api/v1/user/profile',
      {
        method: 'POST',
        // prettier-ignore
        headers: {
          'Authorization': `Bearer ${tokenStorage()}`,
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

    const firstName = profileDataOrResponse.body.firstName
    const lastName = profileDataOrResponse.body.lastName
    dispatch(userLoginOrUpdate(firstName, lastName))
  }
}
