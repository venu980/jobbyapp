import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const {history} = props
  const onClickLogoutBtn = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <nav className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        className="logo-icon"
        alt="website logo"
      />
      <ul className="home-container">
        <Link to="/" className="home">
          <li>Home</li>
        </Link>
        <Link to="/jobs" className="jobs">
          <li>Jobs </li>
        </Link>
      </ul>
      <button className="log-btn" type="button" onClick={onClickLogoutBtn}>
        Logout
      </button>
    </nav>
  )
}
export default withRouter(Header)
