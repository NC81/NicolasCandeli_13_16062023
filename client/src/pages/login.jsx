// import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import handleLogin from '../services/handle-login'

export default function Login() {
  // const [emailValue, setEmailValue] = useState('Email')
  // const [passwordValue, setPasswordValue] = useState('Password')
  const navigate = useNavigate()

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form
          onSubmit={async (e) =>
            (await handleLogin(e)) && navigate('../profile')
          }
          id="login-form"
        >
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              // value={emailValue}
              // onChange={(e) => setEmailValue(e.target.value)}
              type="email"
              name="email"
              id="username"
              minLength={3}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              // value={passwordValue}
              // onChange={(e) => setPasswordValue(e.target.value)}
              type="password"
              name="password"
              id="password"
              minLength={3}
              required
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
