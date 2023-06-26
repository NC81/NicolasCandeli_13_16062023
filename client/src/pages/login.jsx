import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { handleLogin } from '../services/handle-login'
import { useDispatch } from 'react-redux'
// import { isLoadingSelector } from '../utils/selector'

export default function Login() {
  const navigate = useNavigate()
  // const store = useStore()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const isLoading = useSelector(isLoadingSelector)

  const dispatch = useDispatch()

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form
          onSubmit={async (e) =>
            // (await handleLogin(e, email, password, dispatch)) &&
            (await dispatch(handleLogin(e, email, password))) &&
            navigate('../profile')
          }
          id="login-form"
        >
          <div className="input-wrapper">
            <label htmlFor="email">Username</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
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
          <button
            // disabled={isLoading}
            type="submit"
            className="sign-in-button"
          >
            Sign In
          </button>
        </form>
      </section>
    </main>
  )
}
