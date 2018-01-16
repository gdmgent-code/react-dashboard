import React, { Component } from 'react';
import './employeecontrolledled.css';

import ControlledLed from '../ControlledLed';

class EmployeeControlledLed extends Component {
  constructor(props) {
    super(props);

    this.state = { isToggleOn: false };
  }

  handleClick = (ev) => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));

    console.log(this.props);
    this.props.onLedChange(this.state.isToggleOn);
  }

  render() {
    const classNames = `controlled-led`;

    return (
      <ControlledLed />
    );
  }
}

export default EmployeeControlledLed;
