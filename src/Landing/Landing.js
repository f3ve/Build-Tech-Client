import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'

export default function Landing() {
  return (
    <section id='landing-box' className='box'>
      <h2>Welcome To BuildTech!</h2>
      <p>A better future, Online.</p>
      <Link to='/build-form'>Create a build</Link>
      <Link to='/create-account'>Create an account</Link>
    </section>
  )
}