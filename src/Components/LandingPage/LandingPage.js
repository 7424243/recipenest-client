import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'


function LandingPage() {
    return (
        <div className='landing-page-container'>
            <p>RecipeNest is a platform created to help keep track of virtual recipes.</p> 
            <p>It allows you to...</p>
            <ul className='landing-page-list'>
                <li className='landing-page-li'>Save links and notes for recipes.</li>
                <li className='landing-page-li'>Get all previously saved recipes.</li>
            </ul>
            <p>Initially, you are shown a list of previously saved recipe names and a fun word cloud that was created based on the recipe entry's description.</p> 
            <p>To view a saved recipe, click on the recipe name. </p>
            <p>To add a new recipe, click on 'Add Recipe' and you will be prompted to provide some details such as the name of the recipe, the link, a description, and any additional notes you want.</p>
            <div className='landing-page-button-container'>
                <Link  to='/recipes'><button className='landing-page-button'>Get Started!</button></Link>
            </div>
            
        </div>
    )
}

export default LandingPage