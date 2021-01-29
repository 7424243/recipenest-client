import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'


function LandingPage() {
    return (
        <div className='landing-page-container'>
            <p>RecipeNest is a platform created to help keep track of notes for virtual recipes.</p> 
            <p>Once you are logged in, the app allows you to...</p>
            <ul className='landing-page-list'>
                <li className='landing-page-li'>Access your own saved recipe notes.</li>
                <li className='landing-page-li'>Edit, delete, and add your own recipe notes.</li>
            </ul>
            <p>Initially, you will be prompted to login - feel free to Sign Up to create your own account or use the demo credientials below. </p>
            <p className='demo-creds'>Username: demo</p>
            <p className='demo-creds'>Password: Password0!</p>
            <p>To view a saved recipe, simply click on the recipe.</p> 
            <p>To add a new recipe, click on the '+' button near the bottom of the page.</p>
            <br/>
            <p>If you choose to sign up for an account, keep in mind that you need to add recipe notes in order to see anything on the My Recipes page!!</p>
            <div className='landing-page-button-container'>
                <Link  to='/login'><button className='landing-page-button'>Get Started!</button></Link>
            </div>
            
        </div>
    )
}

export default LandingPage