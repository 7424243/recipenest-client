import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'


function LandingPage() {
    return (
        <div className='landing-page-container'>
            <p>RecipeNest is a platform created to help keep track of virtual recipes.</p> 
            <p>It allows you to...</p>
            <ul>
                <li>Save links and notes for recipes.</li>
                <li>Get all previously saves recipes.</li>
            </ul>
            <p>Initially, you are shown a list of previously saved recipe names and a fun word cloud that was created based on the recipe entry's description.</p> 
            <p>To view a saved recipe, click on the recipe name. </p>
            <p>To add a new recipe, click on 'Add Recipe' and you will be prompted to provide some details such as the name of the recipe, the link, a description, and any additional notes you want.</p>
            <Link to='/recipes'><button>Get Started!</button></Link>
        </div>
    )
}

export default LandingPage