import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav>
            <Link to="/recipes">All Recipes |</Link>
            <Link to="/addRecipe"> Add Recipe |</Link>
            <Link to="/login"> Login |</Link>
            <Link to="/signup"> Sign Up</Link>
        </nav>
    )
}

export default NavBar