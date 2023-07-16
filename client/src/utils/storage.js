export default async function setStorage(email, password, getState) {
  if (getState().user.isRememberMeChecked) {
    localStorage.setItem('ArgentBank-email', email)
    localStorage.setItem('ArgentBank-password', password)
    sessionStorage.removeItem('ArgentBank-email')
    sessionStorage.removeItem('ArgentBank-password')
  } else {
    sessionStorage.setItem('ArgentBank-email', email)
    sessionStorage.setItem('ArgentBank-password', password)
    localStorage.removeItem('ArgentBank-email')
    localStorage.removeItem('ArgentBank-password')
  }
}
