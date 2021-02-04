import React from 'react'
import { Link } from 'react-router-dom'
import landing from './landing.png'
import './LandingPage.css'


function LandingPage() {
    return (
        <div className='landing-page-container'>
            <div className='img-container'>
                <img className='landing-img' src={landing} alt='from recipe website'/>
            </div>
            <p className='landing-page-info'>Sign Up or use the demo credientials below. </p>
            <p className='demo-creds'>Username: demo</p>
            <p className='demo-creds'>Password: Password0!</p>
            <br/>
            <p className='landing-page-info'>If you choose to sign up for an account, keep in mind that you need to add recipe notes in order to see anything on the My Recipes page!!</p>
            <div className='landing-page-button-container'>
                <Link  to='/login'><button className='landing-page-button'>Get Started!</button></Link>
            </div>
            
        </div>
    )
}

export default LandingPage