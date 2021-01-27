import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import './LoginPage.css'

class LoginPage extends Component {

    state = {
        user_name: '',
        password: ''
    }

    handleSubmitBasicAuth = e => {
        e.preventDefault()
        const {user_name, password} = this.state
        TokenService.saveAuthToken(
            TokenService.makeBasicAuthToken(user_name, password)
        )
        this.props.history.push('/recipes')
    }

    handleUsername = e => {
        this.setState({user_name: e.target.value})
    }

    handlePassword = e => {
        this.setState({password: e.target.value})
    }


    render() {
        return (
            <>
                <h3>Login!</h3>
                <form 
                    className='login-form'
                    onSubmit={this.handleSubmitBasicAuth}
                >
                    <section className='username'>
                        <label htmlFor='username'>Username: </label>
                        <input 
                            type='text' 
                            placeholder='username' 
                            required
                            onChange={this.handleUsername}
                        />
                    </section>
                    <section className='password'>
                        <label htmlFor='password'>Password: </label>
                        <input 
                            type='text' 
                            placeholder='password' 
                            required
                            onChange={this.handlePassword}
                        />
                    </section>
                    <section className='buttons'>
                        <Link to='/recipes'><button>Cancel</button></Link>
                        <Link to='/signup'><button>Sign Up</button></Link>
                        <button type='submit'>Submit</button>
                    </section>
                </form>
            </>
        )
    }
}

export default LoginPage