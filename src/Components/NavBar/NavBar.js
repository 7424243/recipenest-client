import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import './NavBar.css'

class NavBar extends Component {

    logoutLink() {
        return (
            <Link to='/' className='nav-link'> Logout </Link>
        )
    }

    loginLink() {
        return (
            <Link to='/login' className='nav-link'> Login </Link>
        )
    }
    
    render() {
        return (
            <nav>
                <Link to='/recipes' className='nav-link'>All Recipes |</Link>
                <Link to='/recipes' className='nav-link'> My Recipes |</Link>
                {TokenService.hasAuthToken() ? this.logoutLink() : this.loginLink()}
                
            </nav>
        )
    }

}

export default NavBar