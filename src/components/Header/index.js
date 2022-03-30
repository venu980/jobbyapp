import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
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
    <button className="log-btn" type="button">
      Logout
    </button>
  </nav>
)

export default Header
