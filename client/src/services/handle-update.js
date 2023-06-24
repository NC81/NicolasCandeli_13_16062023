import fetchAPI from '../utils/fetch'
import { userUpdate } from '../features/profile'

export default async function handleUpdate(e, firstName, lastName, store) {
  e.preventDefault()
  console.log('update', firstName, lastName)
  const token = localStorage.getItem('token')

  const updateRequest = new Request(
    'http://localhost:3001/api/v1/user/profile',
    {
      method: 'PUT',
      // prettier-ignore
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ firstName: firstName, lastName: lastName }),
    }
  )
  const data = await fetchAPI(updateRequest)
  const newFirstName = data.body.firstName
  const newLastName = data.body.lastName
  store.dispatch(userUpdate(newFirstName, newLastName))
  console.log('updateData', data)
}
