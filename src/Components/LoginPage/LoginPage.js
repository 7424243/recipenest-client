import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import config from '../../config'
import './LoginPage.css'
import RecipenestContext from '../../RecipenestContext'
import PropTypes from 'prop-types'

class LoginPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user_name: '',
            password: '',
            error: null
        }
    }

    static contextType = RecipenestContext

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
                console.log(res)
                
                TokenService.saveAuthToken(res.authToken)
                this.context.onLoginSuccess()
                
                this.props.history.push('/my-recipes')
                
            })
            .catch(err => {
                this.setState({error: err.error})
                console.error({err})
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
                            type='password' 
                            placeholder='password' 
                            required
                            onChange={this.handlePassword}
                        />
                    </section>
                    <section className='buttons'>
                        <Link to='/'><button>Cancel</button></Link>
                        <Link to='/signup'><button>Sign Up</button></Link>
                        <button type='submit'>Submit</button>
                    </section>
                    {this.state.error && <p>{this.state.error}. Please try logging in again, or sign up for an account.</p>}
                </form>
            </>
        )
    }
}

export default LoginPage

LoginPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func
    }).isRequired
}