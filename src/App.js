import React, { Component } from 'react'
// import Alert from 'react-bootstrap/Alert'

import Homepage from './homescreen/Homepage'
import MainRoutes from './MainRoutes'

import './App.scss'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] })
  }

  render () {
    // const { alerts, user } = this.state

    return (
      <React.Fragment>
        <main className="container">
          <MainRoutes alert={this.alert}/>
          <Homepage/>
        </main>
      </React.Fragment>
    )
  }
}

export default App
