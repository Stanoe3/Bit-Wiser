import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
      </div>
    )
  }
}

export default App;
