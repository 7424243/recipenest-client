import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import './Header.css'


function Header() {
    return (
        <div className='header-container'>
            <Link to='/'><h1>RecipeNest</h1></Link>
            <NavBar />
        </div>
    )
}

export default Header