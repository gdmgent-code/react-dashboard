import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ControlledLed from './components/ControlledLed/';
import GitHub from './components/GitHub';
import DigitalClock from './components/DigitalClock';
import EducationProgramme from './components/EducationProgramme';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleLedChange = this.handleLedChange.bind(this);
  }

  handleLedChange = (isLedOn) => {
    console.log(isLedOn);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ControlledLed isOn="true" onLedChange={this.handleLedChange} />
        <ControlledLed isOn="true" onLedChange={this.handleLedChange} />
        <ControlledLed isOn="true" onLedChange={this.handleLedChange} />
        <GitHub username="gdmgent" />
        <DigitalClock utc="8" />
        <EducationProgramme option="1819-nmd" />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
