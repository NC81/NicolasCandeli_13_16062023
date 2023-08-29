export function tokenInStorage() {
  return (
    localStorage.getItem('ArgentBank-token') ||
    sessionStorage.getItem('ArgentBank-token')
  )
}

export function storeToken(apiToken, rememberMe) {
  let token
  if (apiToken) {
    token = apiToken
    console.log('api')
  } else {
    token = tokenInStorage()
    console.log('storage')
  }

  if (rememberMe) {
    console.log('rememberMe true', rememberMe)
    sessionStorage.removeItem('ArgentBank-token')
    localStorage.setItem('ArgentBank-token', token)
  } else {
    console.log('rememberMe false', rememberMe)
    localStorage.removeItem('ArgentBank-token')
    sessionStorage.setItem('ArgentBank-token', token)
  }
}
