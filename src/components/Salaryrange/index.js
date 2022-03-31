import './index.css'

const Salaryrange = props => {
  const {salaryDetails} = props
  const {label} = salaryDetails
  return (
    <li className="list-items">
      <input type="radio" htmlFor="salary" />
      <label className="salary-label" id="salary">
        {label}
      </label>
    </li>
  )
}

export default Salaryrange
