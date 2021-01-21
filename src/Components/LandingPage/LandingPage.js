import React from 'react'
import { Link } from 'react-router-dom'


function LandingPage() {
    return (
        <>
            <p>RecipeNest is a platform to help keep track of virtual recipes. It allows you to save links and notes for recipes that you have tried. </p>
            <p>Initially, you are shown a list of previously saved recipe names and a fun word cloud that was created based on the recipe entry's description. To view a saved recipe, click on the recipe name. To add a new recipe, click on 'Add Recipe' and you will be prompted to provide some details such as the name of the recipe, the link, a description, and any additional notes you want.</p>
            <Link to='/recipes'><button>Get Started!</button></Link>
        </>
    )
}

export default LandingPage