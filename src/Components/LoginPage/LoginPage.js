import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import config from '../../config'
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

    handleSubmitJwtAuth = e => {
        e.preventDefault()
        fetch(`${config.API_ENDPOINT}/auth/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(this.state)
        })
            .then(res => {
                if(!res.ok) {
                    return res.json().then(e => Promise.reject(e))
                }
                return res.json()
            })
            .then(res => {
                TokenService.saveAuthToken(res.authToken)
                this.props.history.push('/recipes')
            })
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
                    onSubmit={this.handleSubmitJwtAuth}
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