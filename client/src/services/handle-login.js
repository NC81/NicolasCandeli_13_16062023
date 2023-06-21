import fetchAPI from '../utils/fetch'
import { login } from '../features/login'

export default async function handleLogin(e, email, password, store) {
  e.preventDefault()

  const testCredentials = {
    email: 'tony@stark.com',
    password: 'password123',
  }

  const loginRequest = new Request('http://localhost:3001/api/v1/user/login', {
    method: 'POST',
    headers: {
      // prettier-ignore
      'Accept': 'application/json',
      'Content-type': 'application/json',
    },
    // body: JSON.stringify({ email: email, password: password }),
    body: JSON.stringify(testCredentials),
  })
  const loginData = await fetchAPI(loginRequest)
  const token = loginData.body.token

  const profileRequest = new Request(
    'http://localhost:3001/api/v1/user/profile',
    {
      method: 'POST',
      headers: {
        // prettier-ignore
        'Authorization': `Bearer ${token}`,
      },
    }
  )
  const profileData = await fetchAPI(profileRequest)
  const firstName = profileData.body.firstName
  const lastName = profileData.body.lastName
  store.dispatch(login(firstName, lastName))
  console.log('profileData', profileData)

  return profileData
}
