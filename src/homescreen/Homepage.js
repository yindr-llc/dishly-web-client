import React from 'react'
// import { Link } from 'react-router-dom'

import './Homepage.scss'

const bgTopImage = {
  backgroundColor: 'blue',
  backgroundImage: 'url(../../public/images/feast.png)',
  fontSize: '15px',
  textAlign: 'center'
}

const Homepage = ({ user }) => (
  <div style={bgTopImage}>
    <p>Eat, Socialize, and be Rewarded</p>
    <p>Dishly allows you to easily swipe through restaurant dishes and find
    the ones you and your friends want to share</p>
  </div>
)

export default Homepage
