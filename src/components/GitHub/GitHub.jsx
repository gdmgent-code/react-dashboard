import React, { Component } from 'react';
import './github.css';

const GITHUBUSERNAMEURL = username =>
  `https://api.github.com/users/${username}`;

class GitHub extends Component {
  constructor(props) {
    super(props);

    this.state = {
      githubData: null,
      requestFailed: false
    }
  }

  componentDidMount() {
    this.loadGitHubUsername(this.props.username);
  }

  loadGitHubUsername(username) {
    fetch(GITHUBUSERNAMEURL(username))
    .then(response => {
      if(!response.ok) {
        throw Error('Network request failed!');
      }
      console.log(response);
      return response;
    })
    .then(data => data.json())
    .then(data => {
      console.log(data);
      this.setState({
        githubData: data
      })
    }, () => {
      this.setState({
        requestFailed: true
      })
    });
  }

  render() {
    if(this.state.requestFailed) return <p>Failed!</p>
    if(!this.state.githubData) return <p>Loading...</p>
    return (
      <div>
        <h2>{ this.state.githubData.name }</h2>
      </div>
    );
  }
}

export default GitHub;
