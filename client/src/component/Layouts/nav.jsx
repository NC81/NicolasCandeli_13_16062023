import { Link } from 'react-router-dom'
import logo from '../../assets/argentBankLogo.png'

export default function Nav() {
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
      <div>
        <Link className="main-nav-item" to="login">
          <i className="fa fa-user-circle"></i> Sign In
        </Link>
      </div>
    </nav>
  )
}
