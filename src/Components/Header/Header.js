import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import './Header.css'


function Header() {
        return (
            <div className='header-container'>
                <Link to='/recipes'><h1>RecipeNest</h1></Link>
                <NavBar className='NavBar'/>
            </div>
        )
}

export default Header