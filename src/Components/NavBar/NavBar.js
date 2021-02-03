import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import RecipenestContext from '../../RecipenestContext'
import TokenService from '../../services/token-service'
import './NavBar.css'

class NavBar extends Component {

    //set default state
    state = {
        isLoggedIn: true
    }
    
    //allow access to context
    static contextType = RecipenestContext

    //function for when logout gets clicked
    handleLogoutClick = () => {
        TokenService.clearAuthToken()
        this.setState({isLoggedIn: false})
    }

    //render login or logout
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