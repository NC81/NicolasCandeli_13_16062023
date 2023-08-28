export function tokenStorage() {
  return (
    localStorage.getItem('ArgentBank-token') ||
    sessionStorage.getItem('ArgentBank-token')
  )
}

export function setTokenStorage(token, rememberMe) {
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
