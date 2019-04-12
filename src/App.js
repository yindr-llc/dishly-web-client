import React, { Component } from 'react'
// import Alert from 'react-bootstrap/Alert'

import Homepage from './homescreen/Homepage'
import MainRoutes from './MainRoutes'

import './App.scss'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { firebaseSignUp, signIn } from './auth/api'
firebase.initializeApp({
  apiKey: 'AIzaSyDwiMcXTvnU_enQVDhYG9q1tglt4JjLauc',
  authDomain: 'dishly-3e346.firebaseapp.com'
})

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: [],
      isSignedIn: false,
      credentials: null
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
      if (user) {
        this.setState({ credentials: { 'email': user.email, 'password': user.uid } })
        console.log(this.state)
        signIn(this.state.credentials)
          .then((user) => console.log(user))
          .catch(() => {
            firebaseSignUp(this.state.credentials)
              .then(() => {
                console.log('sucess sign up ')
                signIn(this.state.credentials)
                  .then((user) => console.log(user))
              })
              .catch(console.log)
          })
      }
      this.setState({ isSignedIn: user })
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
