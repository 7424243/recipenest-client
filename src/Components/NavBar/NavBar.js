import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
    return (
        <nav>
            <Link to='/recipes'>All Recipes |</Link>
            <Link to='/recipes'> My Recipes |</Link>
            <Link to='/login'> Login </Link>
        </nav>
    )
}

export default NavBar