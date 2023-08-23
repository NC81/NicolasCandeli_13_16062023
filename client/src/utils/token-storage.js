export function tokenStorage() {
  return (
    sessionStorage.getItem('ArgentBank-token') ||
    localStorage.getItem('ArgentBank-token')
  )
}

export function setTokenStorage(token, getState) {
  if (getState().tools.isRememberMeChecked) {
    localStorage.setItem('ArgentBank-token', token)
  } else {
    sessionStorage.setItem('ArgentBank-token', token)
  }
}
