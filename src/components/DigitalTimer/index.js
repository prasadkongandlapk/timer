import './index.css'
import {Component} from 'react'

const Timer = props => {
  const {count, isTimeStarted, minCount} = props

  const secCount = count === 60 ? '00' : count

  const seconds = count < 10 ? `0${secCount}` : count

  const minutes = minCount < 10 ? `0${minCount}` : minCount

  const pauseBtn = isTimeStarted ? (
    <p className="bhdhfhsdfhs">Running</p>
  ) : (
    <p className="bhdhfhsdfhs">Paused</p>
  )

  return (
    <div className="djladsj">
      <div className="timer-card">
        <div className="time-card">
          <h1 className="ppppp">{minutes}</h1>
          <h1 className="ppppp">:</h1>
          <h1 className="ppppp">{count === 60 ? secCount : seconds}</h1>
        </div>
        {pauseBtn}
      </div>
    </div>
  )
}

class DigitalTimer extends Component {
  state = {btnCount: 0, minCount: 25, isTimeStarted: false, count: 60}

  tick = () => {
    const {count, minCount} = this.state
    if (count > 0) {
      this.setState(prevState => ({
        count: prevState.count - 1,
      }))
    } else if (minCount > 0 && count === 0) {
      this.setState(prevState => ({
        minCount: prevState.minCount - 1,
        count: 60,
      }))
    }
  }

  onClickStartBtn = () => {
    this.setState(preState => ({
      isTimeStarted: !preState.isTimeStarted,
    }))
    this.intervalId = setInterval(this.tick, 1000)
  }

  onClickPauseBtn = () => {
    clearInterval(this.intervalId)

    this.setState(preState => ({
      isTimeStarted: !preState.isTimeStarted,
    }))
  }

  onClickResetBtn = () => {
    clearInterval(this.intervalId)

    this.setState({
      isTimeStarted: false,
      count: 60,
      minCount: 25,
    })
  }

  decreaseBtn = () => {
    const {btnCount, minCount} = this.state
    if (btnCount > 0) {
      this.setState(prevState => ({
        btnCount: prevState.minCount - 1,
        minCount: prevState.minCount - 1,
      }))
    }
  }

  increaseBtn = () => {
    const {btnCount, minCount} = this.state

    this.setState(prevState => ({
      btnCount: prevState.minCount + 1,
      minCount: prevState.minCount + 1,
    }))
  }

  render() {
    const {isTimeStarted, btnCount, minCount, count} = this.state

    const startButton = isTimeStarted ? (
      <div className="start-btn-card">
        <button
          type="button"
          className="start-btn"
          onClick={this.onClickPauseBtn}
        >
          <img
            className="start-img"
            src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
            alt="pause icon"
          />
          Pause
        </button>
      </div>
    ) : (
      <div className="start-btn-card">
        <button
          type="button"
          className="start-btn"
          onClick={this.onClickStartBtn}
        >
          <img
            className="start-img"
            src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
            alt="play icon"
          />
          Start
        </button>
      </div>
    )

    return (
      <div className="bg">
        <h1>Digital Timer</h1>
        <Timer
          count={count}
          btnCount={btnCount}
          minCount={minCount}
          isTimeStarted={isTimeStarted}
        />

        <div className="align-right">
          <div className="btns-card">
            {startButton}
            <div className="reset-btn-card">
              <button
                onClick={this.onClickResetBtn}
                type="button"
                className="reset-btn"
              >
                <img
                  className="reset-img"
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
            <p className="p-count">{minCount}</p>
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
