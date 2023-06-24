import fetchAPI from '../utils/fetch'
import { userLogin } from '../features/profile'

export default async function handleLogin(e, email, password, store) {
  e.preventDefault()

  const testCredentials = {
    email: 'tony@stark.com',
    password: 'password123',
  }

  const loginRequest = new Request('http://localhost:3001/api/v1/user/login', {
    method: 'POST',
    // prettier-ignore
    headers: {
      'Content-type': 'application/json',
    },
    // body: JSON.stringify({ email: email, password: password }),
    body: JSON.stringify(testCredentials),
  })
  const loginData = await fetchAPI(loginRequest)
  const token = loginData.body.token
  localStorage.setItem('token', token)

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
  const data = await fetchAPI(profileRequest)
  const firstName = data.body.firstName
  const lastName = data.body.lastName
  store.dispatch(userLogin(firstName, lastName))
  console.log('profileData', data)

  return data
}
