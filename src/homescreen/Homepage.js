import React from 'react'
import { Link } from 'react-router-dom'
import './Homepage.scss'
import bgTopImg from '../images/feast.jpg'

const homeImg = {
  height: '100vh',
  opacity: '.8',
  width: '65vw'
}
const homeLogo = {
  fontSize: '10rem'
}
const about = {
  fontSize: '1.5rem',
  width: '20vw'
}

const authenticatedOptions = (
  <div className="button-container">
    <Link to="/change-password">Change Password</Link>
    <Link to="/sign-out">Sign Out</Link>
    <Link to="/">Home</Link>
  </div>
)

const unauthenticatedOptions = (
  <div className="button-container">
    <Link to="/sign-up">Sign Up</Link>
    <Link to="/sign-in">Sign In</Link>
    <Link to="/">Home</Link>
    <Link to="/google-sign-in">Google Sign In</Link>
  </div>
)

const Homepage = ({ user }) => (
  <div className='home-container'>
    <img style={homeImg} src={bgTopImg} />
    <div className='home-content'>
      <h1 style={homeLogo}>Dishly</h1>
      <p>Eat, Socialize, and be Rewarded</p>
      <p style={about}>Dishly allows you to easily swipe through restaurant dishes and find
      the ones you and your friends want to share</p>
      <form className="flex-form">
        <label htmlFor="from">
          <i className="ion-location"></i>
        </label>
        <input type="search" placeholder="Enter your zip code" />
        <input type="submit" value="Search" />
      </form>
      { user && <span>Welcome, {user.email}</span>}
      { user ? authenticatedOptions : unauthenticatedOptions }
    </div>
  </div>
)

export default Homepage
