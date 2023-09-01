import fetchAPI from '../utils/fetch'
import { userLoginOrUpdate } from '../features/user'
import { tokenInStorage, storeToken } from '../utils/token-storage'

export function handleLogin(e, email, password, rememberMe) {
  return async (dispatch, getState) => {
    e.preventDefault()

    if (!tokenInStorage()) {
      console.log('API')
      const tokenRequest = new Request(
        'http://localhost:3001/api/v1/user/login',
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({ email: email, password: password }),
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

      var apiToken = loginData.body.token
    }
    console.log('apiToken', apiToken)
    storeToken(apiToken, rememberMe)

    const dataRequest = new Request(
      'http://localhost:3001/api/v1/user/profile',
      {
        method: 'POST',
        // prettier-ignore
        headers: {
          'Authorization': `Bearer ${tokenInStorage()}`,
        },
      }
    )
    const profileData = await fetchAPI(dataRequest, 'login', dispatch, getState)
    console.log('profileData', profileData)

    if (getState().error.hasError) {
      return
    }

    const firstName = profileData.body.firstName
    const lastName = profileData.body.lastName
    dispatch(userLoginOrUpdate(firstName, lastName))
  }
}
