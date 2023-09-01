import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { isConnectedSelector, firstNameSelector } from '../../utils/selector'
import { userLogout } from '../../features/user'
import logo from '../../assets/argentBankLogo.png'

export default function Nav() {
  const isConnected = useSelector(isConnectedSelector)
  const firstName = useSelector(firstNameSelector)
  const dispatch = useDispatch()

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div className="main-nav-user">
        {isConnected ? (
          <>
            <Link className="main-nav-item" to="login">
              <i className="fa fa-user-circle"></i> {firstName}{' '}
            </Link>
            <Link
              onClick={() => dispatch(userLogout())}
              to="/"
              className="main-nav-item"
            >
              <i className="fa fa-sign-out"></i> Sign Out
            </Link>
          </>
        ) : (
          <Link className="main-nav-item" to="login">
            <i className="fa fa-user-circle"></i> Sign In
          </Link>
        )}
      </div>
    </nav>
  )
}
