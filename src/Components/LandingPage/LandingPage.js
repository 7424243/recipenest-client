import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'


function LandingPage() {
    return (
        <div className='landing-page-container'>
            <p>RecipeNest is a platform created to help keep track of notes for virtual recipes.</p> 
            <p>If you are logged in, the app allows you to...</p>
            <ul className='landing-page-list'>
                <li className='landing-page-li'>Save links and notes for recipes.</li>
                <li className='landing-page-li'>See saved recipe notes from all users.</li>
                <li className='landing-page-li'>Access your own saved recipe notes.</li>
                <li className='landing-page-li'>Edit, delete, and add your own recipe notes</li>
            </ul>
            <p>Initially, you will be shown a list of previously saved recipe names. To view a saved recipe, simply click on the recipe.</p> 
            <p>To add a new recipe, click on the '+' button at the bottom of the My Recipes page.</p>
            <p>Remember, you can only edit or delete your own recipe notes!</p>
            <br/>
            <p>In order to access all of the app's features, you can either Sign Up for an account on the Login page or you can use the login credentials below for a demo.</p>
            <p>Username: demo</p>
            <p>Password: Password0!</p>
            <div className='landing-page-button-container'>
                <Link  to='/recipes'><button className='landing-page-button'>Get Started!</button></Link>
            </div>
            
        </div>
    )
}

export default LandingPage