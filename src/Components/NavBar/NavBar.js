import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav>
            <Link > Home |</Link>
            <Link> Add Recipe |</Link>
            <Link> Login |</Link>
            <Link> Sign Up</Link>
        </nav>
    )
}

export default NavBar