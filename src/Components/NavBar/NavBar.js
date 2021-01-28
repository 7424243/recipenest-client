import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import RecipenestContext from '../../RecipenestContext'
import TokenService from '../../services/token-service'
import './NavBar.css'

class NavBar extends Component {

    static contextType = RecipenestContext

    handleLogoutClick = () => {
        TokenService.clearAuthToken()
        this.context.onLogoutSuccess()
    }

    logoutLink() {
        return (
            <Link to='/recipes' className='nav-link' onClick={this.handleLogoutClick}> Logout </Link>
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