import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <main>
      <h1>Sign In</h1>
      <Link to={'/'}>Home</Link>
      <br />
      <Link to={'/profile'}>Profile</Link>
    </main>
  )
}
