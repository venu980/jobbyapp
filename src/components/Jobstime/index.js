import './index.css'

const Jobstime = props => {
  const {jobTimeDetails} = props
  const {label} = jobTimeDetails

  return (
    <li className="label-container">
      <input type="checkbox" htmlFor="jobtype" />
      <label id="jobtype">{label}</label>
    </li>
  )
}

export default Jobstime
