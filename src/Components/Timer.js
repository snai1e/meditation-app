import React, { Component } from 'react';
import OptionType from './OptionType'
import DigitalTimer from './DigitalTimer'

class Timer extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0,
      decision: 0,
    }
  }

  connector(data) {
    this.setState({counter : data})
  }

  decisionConnector(data){
    this.setState({decision: data})
  }

  handleDecision () {
    const clock = document.querySelector('.clock')
    if (clock){
      if (this.state.decision === '0'
      && (clock.classList.contains('clicked') === false)) {
        clock.classList.toggle('clicked')
      } else if (this.state.decision === '1'
        && (clock.classList.contains('clicked') === true)){
          clock.classList.toggle('clicked')
      }
    }
  }

  render() {
    return (
      <div>
        <OptionType
          {...this.handleDecision()}
          connector={this.connector.bind(this)}
          decisionConnector={this.decisionConnector.bind(this)}
        />
        <div className='timerContainer'>
          <DigitalTimer
            counterState={this.state.counter}
            decisionState={this.state.decision}
          />
        </div>
      </div>
    )
  }
}


export default Timer;
