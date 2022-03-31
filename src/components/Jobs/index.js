import {Component} from 'react'
import Header from '../Header'

import './index.css'
import Jobstime from '../Jobstime'
import Salaryrange from '../Salaryrange'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

class Jobs extends Component {
  render() {
    return (
      <>
        <Header />
        <div>
          <div className="jobs-profile-container">
            <div className="profile-details">
              <h1>Rahul Attuluri</h1>
              <p> Lead Software developer and AI-ML expert</p>
            </div>
          </div>
          <hr className="hr-line" />
          <div>
            <h1>Type of Employement</h1>
            <ul>
              {employmentTypesList.map(eachItem => (
                <Jobstime jobTimeDetails={eachItem} />
              ))}
            </ul>
          </div>
          <hr className="hr-line" />
          <div>
            <h1>Salary range</h1>
            <ul>
              {salaryRangesList.map(eachSalary => (
                <Salaryrange salaryDetails={eachSalary} />
              ))}
            </ul>
          </div>
        </div>
      </>
    )
  }
}
export default Jobs
