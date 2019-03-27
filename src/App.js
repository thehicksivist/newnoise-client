import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

const api = 'http://localhost:3001/'

class App extends Component {

  state = {
    users: []
  }

  componentDidMount() {
    axios.get(api+'users')
    .then((response) => {
      this.setState({ users: response.data })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        { this.state.users.map((user) => <p>{ user.name }: {user.email}</p>) }
      </div>
    );
  }
}

export default App;
