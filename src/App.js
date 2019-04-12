import React, { Component } from 'react'
// import Alert from 'react-bootstrap/Alert'

import Homepage from './homescreen/Homepage'
import MainRoutes from './MainRoutes'

import './App.scss'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

firebase.initializeApp({
  apiKey: 'AIzaSyAt__WIdC5qSYp-3-qu8vLq-wxYuEBrgwE',
  authDomain: 'dishly-web-client.firebaseapp.com'
})

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: [],
      isSignedIn: false
    }
  }

  uiConfig ={
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSucess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
    })
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
          {this.state.isSignedIn
            ? <button onClick ={() => firebase.auth().signOut()}>Sign Out</button>
            : <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          }
        </main>
      </React.Fragment>
    )
  }
}

export default App
