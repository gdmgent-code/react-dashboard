import React, { Component } from 'react';
import './controlledled.css';

import Led from '../Led';

class ControlledLed extends Component {
  constructor(props) {
    super(props);

    this.state = { isToggleOn: false };
  }

  handleClick = (ev) => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));

    this.props.onLedChange(this.state.isToggleOn);
  }

  render() {
    const classNames = `controlled-led`;

    return (
      <div className={classNames}>
        <Led isOn={this.state.isToggleOn} />
        <button onClick={(ev) => this.handleClick(ev)}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      </div>
    );
  }
}

export default ControlledLed;
