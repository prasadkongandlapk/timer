import './index.css'
import {Component} from 'react'

const Timer = props => {
  const {count, date} = props

  return (
    <div className="djladsj">
      <div className="timer-card">
        <p>{date}</p>
      </div>
    </div>
  )
}

class DigitalTimer extends Component {
  state = {date: new Date(), isTimeStarted: true, count: 0}

  onClickStartBtn = () => {
    this.setState(preState => ({
      isTimeStarted: !preState.isTimeStarted,
    }))
  }

  decreaseBtn = () => {
    this.setState(prevState => ({count: prevState.count - 1}))
  }

  increaseBtn = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {isTimeStarted, count, date} = this.state

    const startButton = isTimeStarted
      ? 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
    return (
      <div className="bg">
        <h1>Digital Timer</h1>
        <Timer count={count} date={date} />
        <div className="align-right">
          <div className="btns-card">
            <div className="start-btn-card">
              <button
                type="button"
                className="start-btn"
                onClick={this.onClickStartBtn}
              >
                <img className="start-img" src={startButton} />
                {isTimeStarted ? <p>Start</p> : <p>Pause</p>}
              </button>
            </div>
            <div className="reset-btn-card">
              <button type="button" className="reset-btn">
                <img
                  className="start-img"
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt="reset icon"
                />
                <p>Reset</p>
              </button>
            </div>
          </div>
          <p className="timer-line">Set Timer Limit</p>

          <div className="btns-card">
            <button
              onClick={this.decreaseBtn}
              className="button-count"
              type="button"
            >
              -
            </button>
            <p className="p-count">{count}</p>
            <button
              onClick={this.increaseBtn}
              className="button-count"
              type="button"
            >
              +
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default DigitalTimer
