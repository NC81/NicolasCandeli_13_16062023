import fetchAPI from '../utils/fetch'

export default async function handleLogin(e) {
  e.preventDefault()

  // const testCredentials = {
  //   email: 'tony@stark.com',
  //   password: 'password123',
  // }
  const form = document.querySelector('#login-form')
  const formData = new FormData(form)
  const formDataObject = Object.fromEntries(formData.entries())

  const loginRequest = new Request('http://localhost:3001/api/v1/user/login', {
    method: 'POST',
    headers: {
      // prettier-ignore
      'Accept': 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(formDataObject),
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

  return profileData
}
