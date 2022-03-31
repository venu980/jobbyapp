import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Header />
      <div className="app-container">
        <div className="heading-container">
          <h1 className="heading">Find the job that fits your Life</h1>
          <p className="des">
            Millions of people are searching for jobs,salary information,
            company reviews Find the job that fits your abilities and potential
          </p>
          <button type="button" className="find-btn">
            Find jobs
          </button>
        </div>
      </div>
    </>
  )
}
export default Home
