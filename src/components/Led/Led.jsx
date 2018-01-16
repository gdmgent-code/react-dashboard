import React, { Component } from 'react';
import './led.css';

class Led extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const isLedOnClassName = (this.props.isOn)?'led--ison':'led--isoff';
    const classNames = `led ${isLedOnClassName}`;
    return (
      <div className={classNames}>
      </div>
    );
  }
}

export default Led;
