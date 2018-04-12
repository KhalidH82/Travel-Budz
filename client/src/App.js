import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Services from './services'
import { Redirect } from 'react-router-dom';

class App extends Component {
  constructor() {
    super()
    this.state  = {
      fireRedirect: false
    }
    this.login = this.login.bind(this)
  }

  login () {
    const email = "1"
    const password = "1"
    const request = {"auth": {"email": email, "password": password}}
    console.log(request)
    Services.logIn(request)
    .then(result => {
      localStorage.setItem("jwt", result.data.jwt)
      this.setState = ({
        fireRedirect: true
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    if(this.fireRedirect == false) {
          return (
      <div className="App">
        <h1 style={{marginTop: "20vh", marginBottom: "5vh"}}>
          Enter Travel Budz
        </h1>
        <form>
          <label htmlFor="email">Email: </label>
          <br />
          <input
            name="email"
            id="email"
            type="email"
          />
          <br /><br />
          <label htmlFor="password">Password:</label>
          <br />
          <input
            name="password"
            id="password"
            type="password"
          />
          </form>
          <br />
          <button
            onClick={this.login}
          >
              Login
          </button>
          {this.state.fireRedirect ? <Redirect to={`/trips`} /> : ''}
        <br />
      </div>
    );
    }

    else {
      return (
        <Redirect to='/trips' />
        )
    }

  }

}

export default App;
