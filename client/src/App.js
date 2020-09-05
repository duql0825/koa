import React, { Component } from 'react'
// import { BrowserRouter as Router, Route } from "react-router-dom";

import List from './components/List'
import Dashboard from './Dashboard'
import Store from './Store'
// import Login from './Login'

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     term: "",
  //     items: [],
  //   };
  // }

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col md-6 mx-auto">
              <h1 className="text-center">Todo</h1>
              <List />
              {/* <Login /> */}
            </div>
          </div>
        </div>
        <Store>
          <Dashboard />
        </Store>
      </>
    )
  }
}

export default App
