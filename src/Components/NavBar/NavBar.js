import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import RecipenestContext from '../../RecipenestContext'
import TokenService from '../../services/token-service'
import './NavBar.css'

class NavBar extends Component {

    state = {
        isLoggedIn: true
    }
    
    static contextType = RecipenestContext

    handleLogoutClick = () => {
        TokenService.clearAuthToken()
        this.setState({isLoggedIn: false})
    }

    //render login or logout based on if auth token has been saved
    logoutLink() {
        return (
            <Link to='/' className='nav-link' onClick={this.handleLogoutClick}> Logout </Link>
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
                {TokenService.hasAuthToken() ? <Link to='/my-recipes' className='nav-link'> My Recipes |</Link> : null}
                {TokenService.hasAuthToken() ? this.logoutLink() : this.loginLink()}
            </nav>
        )
    }

}

export default NavBar