import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
    return (
        <nav>
            <Link to='/recipes' className='nav-link'>All Recipes |</Link>
            <Link to='/recipes' className='nav-link'> My Recipes |</Link>
            <Link to='/login' className='nav-link'> Login </Link>
        </nav>
    )
}

export default NavBar