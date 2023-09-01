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
  } else {
    token = tokenInStorage()
  }

  if (rememberMe) {
    sessionStorage.removeItem('ArgentBank-token')
    localStorage.setItem('ArgentBank-token', token)
  } else {
    localStorage.removeItem('ArgentBank-token')
    sessionStorage.setItem('ArgentBank-token', token)
  }
}
