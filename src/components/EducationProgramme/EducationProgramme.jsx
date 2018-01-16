import React, { Component } from 'react';
import './educationprogramme.css';

import EducationProgrammeCourse from '../EducationProgrammeCourse';

class EducationProgramme extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      courses: null
    };
  }

  componentDidMount() {
    
  }

  componentWillUnmount() {
    
  }

  render() {
    return (
      <div>
        <div>EDUCTION PROGRAMME</div>
        <div>
          <EducationProgrammeCourse course="pol" />
        </div>
      </div>
    );
  }
}

export default EducationProgramme;