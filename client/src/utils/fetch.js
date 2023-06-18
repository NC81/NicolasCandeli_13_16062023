export default async function fetchAPI(request) {
  try {
    const response = await fetch(request)
    console.log('response', response)
    const data = await response.json()

    if (response.ok) {
      return data
    } else {
      console.log('!response.ok', response)
      throw response
    }
  } catch (err) {
    console.log('catch', err)
    throw new Error('User not found')
  }
}
