import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom"
import './App.css'
import Login from "./Login"

class App extends Component {

  render() {
    return <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">City Picker</h1>
          </header>
          <main>
            {/* <Route exact path="/" render={() => <Redirect to="/main" />} /> */}
            <Route path="/" render={() => <Login/>} />
            {/* <Route path="/profile" render={() => <Profile/>} />
            <Route path="/main" render={() => <Main />} />
            <Route path="/logout" render={() => <Logout />} /> */}
          </main>
        </div>
      </Router>
  }
}

export default App;
