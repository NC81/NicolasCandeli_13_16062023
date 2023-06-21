import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import handleLogin from '../services/handle-login'
import { useStore } from 'react-redux'

export default function Login() {
  const navigate = useNavigate()
  const store = useStore()
  const [email, setEmailValue] = useState('')
  const [password, setPasswordValue] = useState('')

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form
          onSubmit={async (e) =>
            (await handleLogin(e, email, password, store)) &&
            navigate('../profile')
          }
          id="login-form"
        >
          <div className="input-wrapper">
            <label htmlFor="email">Username</label>
            <input
              value={email}
              onChange={(e) => setEmailValue(e.target.value)}
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              // minLength={3}
              // required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPasswordValue(e.target.value)}
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              // minLength={3}
              // required
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
    </main>
  )
}
