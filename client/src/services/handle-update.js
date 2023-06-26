import fetchAPI from '../utils/fetch'
import { isLoading, userLoginOrUpdate } from '../features/profile'

export function handleUpdate(e, firstName, lastName) {
  return async (dispatch) => {
    e.preventDefault()
    // dispatch(isLoading(true))

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
    dispatch(userLoginOrUpdate(newFirstName, newLastName))
    // dispatch(isLoading(false))
    console.log('updateData', data)
  }
}
