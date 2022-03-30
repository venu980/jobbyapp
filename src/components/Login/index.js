import {Component} from 'react'
import './index.css'

class Login extends Component {
  state = {
    userName: '',
    passWord: '',
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {userName, passWord} = this.state
    const userDetails = {userName, passWord}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess()
    }
  }

  onChangeUsername = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({passWord: event.target.value})
  }

  renderpasswordfield = () => {
    const {passWord} = this.state
    return (
      <>
        <label className="label-usrname" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          value={passWord}
          className="input-us"
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderusernamefield = () => {
    const {userName} = this.state
    return (
      <>
        <label className="label-usrname" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          value={userName}
          className="input-us"
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  render() {
    return (
      <div className="bg-container">
        <div className="login-container">
          <div className="logo-img-con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="logo"
              className="logo-img"
            />
          </div>
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <div className="input-container">{this.renderusernamefield()}</div>
            <div className="input-container">{this.renderpasswordfield()}</div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
