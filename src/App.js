import {Component} from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts'
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import {HiOutlineSearch} from 'react-icons/hi'
import {CgHome} from 'react-icons/cg'
import {TbLogout} from 'react-icons/tb'
import {FaRegNewspaper} from 'react-icons/fa'
import {BiSpreadsheet} from 'react-icons/bi'
import {MdOutlinePermIdentity} from 'react-icons/md'
import {VscBellDot} from 'react-icons/vsc'
// import Chart from './components/Chart'
// import RadialBar from './components/RadialBar'
import './App.css'

const data = [
  {
    key: 400,
    group_name: '20',
    Employer: 21,
    Employee: 30,
    Total_Interest: 40,
  },
  {
    group_name: '25',
    Employer: 25,
    Employee: 45,
    Total_Interest: 65,
  },
  {
    group_name: '30',
    Employer: 36,
    Employee: 56,
    Total_Interest: 75,
  },
  {
    group_name: '35',
    Employer: 45,
    Employee: 70,
    Total_Interest: 85,
  },
  {
    group_name: '40',
    Employer: 48,
    Employee: 86,
    Total_Interest: 120,
  },
  {
    group_name: '45',
    Employer: 52,
    Employee: 108,
    Total_Interest: 125,
  },
  {
    group_name: '50',
    Employer: 65,
    Employee: 108,
    Total_Interest: 135,
  },
  {
    group_name: '55',
    Employer: 70,
    Employee: 120,
    Total_Interest: 137,
  },
  {
    group_name: '60',
    Employer: 72,
    Employee: 126,
    Total_Interest: 150,
  },
  {
    group_name: '65',
    Employer: 83,
    Employee: 130,
    Total_Interest: 153,
  },
  {
    group_name: '70',
    Employer: 78,
    Employee: 146,
    Total_Interest: 160,
  },
  {
    group_name: '75',
    Employer: 85,
    Employee: 170,
    Total_Interest: 500,
  },
]

class App extends Component {
  state = {contribution: 12, age: 65}

  onChangeContribution = event => {
    this.setState({
      contribution: event.target.value,
    })
  }

  onChangeAge = event => {
    this.setState({
      age: event.target.value,
    })
  }

  DataFormatter = number => {
    if (number > 1) {
      return `$${(number / 1).toString()}`
    }
    return number.toString()
  }

  render() {
    const {contribution, age} = this.state
    return (
      <div className="main-container1">
        <div className="main-container2">
          <button type="button" className="icon-button mobile-bell">
            <VscBellDot className="icon mobile-bell" />
          </button>
          <div className="sub-container1">
            <div className="container1">
              <div className="shortcut-container">
                <div className="shortcut-container-upper">
                  <img
                    src="https://image.shutterstock.com/image-photo/color-butterfly-isolated-on-white-600w-570560110.jpg"
                    alt="butterfly-logo"
                    className="butterfly"
                  />
                  <button type="button" className="icon-button">
                    <HiOutlineSearch className="icon" />
                  </button>
                </div>
                <div className="shortcut-container-lower">
                  <button type="button" className="icon-button active-icon">
                    <CgHome className="icon active-color" />
                  </button>
                  <button type="button" className="icon-button">
                    <FaRegNewspaper className="icon" />
                  </button>
                  <button type="button" className="icon-button">
                    <BiSpreadsheet className="icon" />
                  </button>
                  <button type="button" className="icon-button">
                    <MdOutlinePermIdentity className="icon" />
                  </button>
                </div>
              </div>
              <div className="logout-container">
                <button type="button" className="icon-button">
                  <VscBellDot className="icon" />
                </button>
                <button type="button" className="icon-button">
                  <TbLogout className="icon" />
                </button>
              </div>
            </div>
            <div className="container2">
              <div className="profile-container">
                <div className="profile-pic-container">
                  <img
                    src="https://image.shutterstock.com/image-photo/close-portrait-cheerful-bearded-man-600w-513884902.jpg"
                    alt="profile-pic"
                    className="profile-pic"
                  />
                </div>
                <div className="profile-details-container">
                  <h1 className="profile-heading">Hi Mike,</h1>
                  <p className="profile-para">welcome back</p>
                </div>
              </div>
              <div className="balance-container">
                <div className="first">
                  <p className="balance-para-first">Today</p>
                  <h1 className="balance-heading-first">$19,892</h1>
                  <p className="balance-para">Account Balance</p>
                </div>
                <div className="second">
                  <div className="second1">
                    <h1 className="balance-heading">$4,000</h1>
                    <p className="balance-para desktop">
                      Year-to-Date Contributions
                    </p>
                    <p className="balance-para-mobile">Year-to-Date</p>
                  </div>
                  <div className="second2">
                    <h1 className="balance-heading">$1,892</h1>
                    <p className="balance-para">Total Interest</p>
                  </div>
                </div>
                <button className="balance-button" type="button">
                  I want to...
                </button>
              </div>

              <div className="transaction-container">
                <h1 className="transaction-heading1">Recent Transactions</h1>
                <div className="list1">
                  <p className="transaction-para">2020-08-07</p>
                  <h1 className="transaction-heading">
                    Withdrawal Transfer to Bank-XXX11
                  </h1>
                  <hr className="line" />
                </div>
                <div className="list1">
                  <p className="transaction-para">2020-07-21</p>
                  <h1 className="transaction-heading">
                    Withdrawal Transfer to Bank-XXX11
                  </h1>
                  <hr className="line" />
                </div>
                <div className="list1">
                  <p className="transaction-para">2020-07-16</p>
                  <h1 className="transaction-heading">
                    Withdrawal Transfer to Bank-XXX11
                  </h1>
                  <hr className="line" />
                </div>
              </div>
            </div>
            <div className="container3">
              <div className="income-container">
                <div className="income-container-first">
                  <p className="income-para-first">Retirement Income</p>
                  <h1 className="income-heading-first">Starting Year 2056</h1>
                </div>
                <div className="income-container-lower">
                  <div className="income-container-second">
                    <h1 className="income-heading">$300,000</h1>
                    <p className="income-para">My Goal</p>
                    <hr className="income-line line1" />
                  </div>
                  <div className="income-container-third">
                    <div className="income-container-third-1">
                      <h1 className="income-heading">59%</h1>
                      <p className="income-para">Goal Achieved</p>
                      <hr className="income-line" />
                    </div>
                    <div className="income-container-third-2">
                      <h1 className="income-heading">$300</h1>
                      <p className="income-para">Est. Monthly Income</p>
                      <hr className="income-line" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="chart-container">
                <h1 className="chart-heading">Contributions Overtime</h1>
                <div className="tag-container">
                  <div className="tag">
                    <div className="null1 box">{null}</div>
                    <p className="tag-para">Employer:</p>
                    <h1 className="tag-heading">K 73,500</h1>
                  </div>
                  <div className="tag">
                    <div className="null2 box">{null}</div>
                    <p className="tag-para">Employee:</p>
                    <h1 className="tag-heading">K 52,500</h1>
                  </div>
                  <div className="tag">
                    <div className="null3 box">{null}</div>
                    <p className="tag-para">Total Interest:</p>
                    <h1 className="tag-heading">K 244,313</h1>
                  </div>
                </div>
                <div className="chart">
                  <ResponsiveContainer width="100%" height={180}>
                    <BarChart
                      data={data}
                      margin={{
                        top: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="5 5" vertical={false} />
                      <XAxis
                        dataKey="group_name"
                        tick={{
                          stroke: '#b9b9b9',
                          strokeWidth: 1,
                        }}
                        axisLine={false}
                        tickLine={false}
                        minTickGap={50}
                        allowDataOverflow
                      />
                      <YAxis
                        tickFormatter={this.DataFormatter}
                        tick={{
                          stroke: '#b9b9b9',
                          strokeWidth: 0,
                        }}
                        axisLine={false}
                        dataKey="key"
                      />
                      <Bar
                        dataKey="Employer"
                        name="Employer"
                        fill="#005cb6"
                        barSize="5%"
                        stackId="a"
                      />
                      <Bar
                        dataKey="Employee"
                        name="Employee"
                        fill="#0040ff"
                        barSize="5%"
                        stackId="a"
                      />
                      <Bar
                        dataKey="Total_Interest"
                        name="Total Interest"
                        fill="#68a9f2"
                        barSize="5%"
                        stackId="a"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="comparison-container">
                <div className="title">
                  <h1 className="comparison-heading">
                    How do I compare to my peers?
                  </h1>
                  <p className="comparison-para">
                    These numbers represent current goal achievement
                  </p>
                </div>
                <div className="combined-container">
                  <ul className="selection-container">
                    <li className="each-item">
                      <label htmlFor="age" className="label">
                        Age:
                        <select name="age" id="age" className="select">
                          <option value="under30">Under 30</option>
                          <option value="under40">Under 40</option>
                          <option value="under50">Under 50</option>
                        </select>
                      </label>
                    </li>
                    <hr className="selection-line" />
                    <li className="each-item">
                      <label htmlFor="salary" className="label">
                        Salary:
                        <select name="salary" id="salary" className="select">
                          <option value="20k-30k">20K - 30K</option>
                          <option value="30k-40k">30K - 40K</option>
                          <option value="40k-50k">40K - 50K</option>
                        </select>
                      </label>
                    </li>
                    <hr className="selection-line" />
                    <li className="each-item">
                      <label htmlFor="gender" className="label">
                        Gender:
                        <select name="gender" id="gender" className="select">
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </label>
                    </li>
                  </ul>

                  <div className="radial-percentage">
                    <div className="radial-box">
                      <CircularProgressbar
                        label="Average"
                        value={78}
                        text="78%"
                        styles={buildStyles({
                          textColor: '#424040',
                          pathColor: '#3EFFBD',
                          trailColor: '#CDFFE9',
                        })}
                      />
                      <p className="radial-title">Average</p>
                    </div>
                    <div className="radial-box">
                      <CircularProgressbar
                        label="Average"
                        value={95}
                        text="95%"
                        styles={buildStyles({
                          textColor: '#424040',
                          pathColor: '#3EFFBD',
                          trailColor: '#CDFFE9',
                        })}
                      />
                      <p className="radial-title">Top</p>
                    </div>
                    <div className="radial-box">
                      <CircularProgressbar
                        label="Average"
                        value={59}
                        text="59%"
                        styles={buildStyles({
                          textColor: '#424040',
                          pathColor: '#3EFFBD',
                          trailColor: '#CDFFE9',
                        })}
                      />
                      <p className="radial-title">Me</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sub-container2">
            <div className="container4">
              <h1 className="retirement-heading">Retirement Strategy</h1>
              <p className="contribution-para">Employee Contribution</p>
              <div className="input-container">
                <input
                  className="input"
                  id="contribution"
                  type="range"
                  min={0}
                  max={20}
                  step={1}
                  value={contribution}
                  onChange={this.onChangeContribution}
                />
                <label htmlFor="contribution">{contribution}%</label>
              </div>
              <p className="contribution-para">Retirement Age</p>
              <div className="input-container">
                <input
                  className="input"
                  id="age"
                  type="range"
                  min={0}
                  max={100}
                  step={1}
                  value={age}
                  onChange={this.onChangeAge}
                />
                <label htmlFor="age">{age}</label>
              </div>
              <hr className="horizontal-line" />
              <div className="input-container1">
                <p className="retirement-strategy-subpara">
                  Employer Contribution
                </p>
                <p className="retirement-strategy-subpara">8.4%</p>
              </div>
              <div className="input-container1">
                <p className="retirement-strategy-subpara">Interest Rate</p>
                <p className="retirement-strategy-subpara">5%</p>
              </div>
              <div className="button-container">
                <button type="button" className="update-btn">
                  Update
                </button>
                <a
                  href="https://google.com"
                  className="view-docs"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Help Docs {`>`}
                </a>
              </div>
            </div>
            <div className="container5">
              <h2 className="question-heading">
                Are you considering a
                <br /> <span className="question-span">Housing Advance?</span>
              </h2>
              <p className="question-para">Limited time reduced interest</p>
              <a
                href="https://google.com"
                className="view-docs"
                target="_blank"
                rel="noreferrer"
              >
                Learn More {`>`}
              </a>
            </div>
          </div>
          <div className="mobile-view-icon">
            <button type="button" className="icon-button active-icon">
              <CgHome className="icon active-color" />
            </button>
            <button type="button" className="icon-button">
              <FaRegNewspaper className="icon" />
            </button>
            <button type="button" className="icon-button">
              <BiSpreadsheet className="icon" />
            </button>
            <button type="button" className="icon-button">
              <MdOutlinePermIdentity className="icon" />
            </button>
            <button type="button" className="icon-button">
              <HiOutlineSearch className="icon" />
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default App
