import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { handleLogin } from '../services/handle-login'
import { useDispatch, useSelector } from 'react-redux'
import {
  hasInitialDataSelector,
  isLoadingSelector,
  isDisabledSelector,
  loadingClassSelector,
  hasErrorSelector,
  errorDisplaySelector,
  errorContentSelector,
} from '../utils/selector'
import { errorDisplayToggle } from '../features/error'
import { store } from '../utils/store'
import LoadingSpinner from '../component/loading-spinner'

export default function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isLoading = useSelector(isLoadingSelector)
  const isDisabled = useSelector(isDisabledSelector)
  const loadingClass = useSelector(loadingClassSelector)
  const hasInitialData = useSelector(hasInitialDataSelector)
  const hasError = useSelector(hasErrorSelector)
  const errorDisplay = useSelector(errorDisplaySelector)
  const errorContent = useSelector(errorContentSelector)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <main className="main bg-dark">
      <section className="login-block-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form
          onSubmit={async (e) => {
            await dispatch(handleLogin(e, email, password))
            const storeHasError = store.getState().error.hasError
            !storeHasError && navigate('../profile')
          }}
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
            disabled={isDisabled}
            type="submit"
            className={`sign-in-button ${loadingClass}`}
          >
            {isLoading ? <LoadingSpinner /> : 'Sign In'}
          </button>
          {hasInitialData && (
            <Link className="back-link" to="../profile">
              Back to profile page
            </Link>
          )}
          {hasError && !errorDisplay && (
            <button
              onClick={() => dispatch(errorDisplayToggle(true))}
              type="button"
              className="error-button open-error-button"
            >
              <i className="fa fa-warning"></i>
            </button>
          )}
        </form>
      </section>
      {hasError && errorDisplay && (
        <section className={`login-block-content error-content`}>
          <button
            onClick={() => dispatch(errorDisplayToggle(false))}
            type="button"
            className="error-button close-error-button"
          >
            <i className="fa fa-close"></i>
          </button>
          <i className="fa fa-warning"></i>
          <p className="error-message">
            <i>Sorry, an unexpected error has occurred</i>
            <br />
            <b>{errorContent}</b>
          </p>
        </section>
      )}
    </main>
  )
}
