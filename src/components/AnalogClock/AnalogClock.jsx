import React, { Component } from 'react';
import './analogclock.css';

class AnalogClock extends Component {
  constructor(props) {
    super(props);

    this.state = { date: new Date() };
  }

  componentDidMount() {
    console.log('DigitalClock component is mounted!');

    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState((prevState, props) => ({
      date: this.generateDateForUTC()
    }));
    
  }

  generateDateForUTC() {
    let now = new Date();
    now.setUTCHours(now.getUTCHours()-this.props.utc);
    return now;
  }

  dateToLocalTimeShortString(date) {
    return `${this.digitize(date.getUTCHours(),2)}:${this.digitize(date.getUTCMinutes(),2)}:${this.digitize(date.getUTCSeconds(),2)}`
  }

  digitize(str, n) {
    str = str.toString();
    while(str.length < n) {
      str = '0' + str;
    }
    return str;
  }

  render() {
    return (
        <div>
            <h2>It is {this.dateToLocalTimeShortString(this.state.date)}.</h2>
        </div>
    );
  }
}

export default AnalogClock;