import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'


function Header() {
        return (
            <>
                <Link to='/recipes'><h1>RecipeNest</h1></Link>
                <NavBar />
            </>
        )
}

export default Header