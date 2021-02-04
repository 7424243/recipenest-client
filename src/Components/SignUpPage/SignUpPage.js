import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import config from '../../config'
import RecipenestContext from '../../RecipenestContext'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import PropTypes from 'prop-types'
import TokenService from '../../services/token-service'
import './SignUpPage.css'

class SignUpPage extends Component {

    //set default state
    state = {
        full_name: '',
        user_name: '',
        password: '',
        nickname: '',
        id: -1,
        error: null
    }

    //allow access to context
    static contextType = RecipenestContext

    //POST a new user
    handleSubmit = e => {
        e.preventDefault()
        fetch(`${config.API_ENDPOINT}/users`, {
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
            .then((res) => {
                console.log(res)
                const {user_name, password} = this.state
                const loginCreds = {user_name, password}
                return fetch(`${config.API_ENDPOINT}/auth/login`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(loginCreds)
                })
                    .then(res => {
                        if(!res.ok) {
                            return res.json().then(e => Promise.reject(e))
                        }
                        return res.json()
                    })
                    .then(res => {
                        TokenService.saveAuthToken(res.authToken)
                        this.context.onLoginSuccess()
                        this.props.history.push('/my-recipes')
                        
                    })
                    .catch(err => {
                        this.setState({error: err.error})
                        console.error({err})
                    })
            })
            .catch(err => {
                this.setState({error: err.error})
                console.error({err})
            })
    }

    //set state with new values that user inputs
    handleAddFullname = e => {
        this.setState({full_name: e.target.value})
    }
    handleAddUsername = e => {
        this.setState({user_name: e.target.value})
    }
    handleAddPassword = e => {
        this.setState({password: e.target.value})
    }
    handleAddNickname = e => {
        this.setState({nickname: e.target.value})
    }

    render() {
        return (
            <div className='sign-up-container'>
                <h3>Sign Up!</h3>
                <ErrorBoundary>
                    <form 
                        className='sign-up-form'
                        onSubmit={this.handleSubmit}
                    >
                        <p className='required-field'>* required field</p>
                        <section className='fullname'>
                            <label htmlFor='fullname'>Full Name: * </label>
                            <input 
                                type='text' 
                                placeholder='Full Name'
                                autoComplete='off'
                                required 
                                onChange={this.handleAddFullname}
                            />
                        </section>
                        <section className='url'>
                            <label htmlFor='username'>Username: * </label>
                            <input 
                                type='text' 
                                placeholder='username' 
                                autoComplete='off'
                                required
                                onChange={this.handleAddUsername}
                            />
                        </section>
                        <section className='password'>
                            <label htmlFor='password'>Password: * </label>
                            <p className='password-info'>Must be at least 8 characters long and contain at least 1 upper case, 1 lower case, 1 number, and 1 special character.</p>
                            <input 
                                type='password' 
                                placeholder='password' 
                                autoComplete='off'
                                required
                                onChange={this.handleAddPassword}
                            />
                        </section>
                        <section className='nickname'>
                            <label htmlFor='nickname'>Nickname (optional): </label>
                            <input 
                                type='text' 
                                placeholder='optional nickname' 
                                autoComplete='off'
                                onChange={this.handleAddNickname}/>
                        </section>
                        <section className='buttons'>
                            <button 
                                type='submit' 
                                className='cancel-button'
                            >
                                Submit
                            </button>
                            <Link to='/'><button className='save-button'>Cancel</button></Link>

                        </section>
                        {this.state.error && <p className='sign-up-error'>{this.state.error.message}. Please try again.</p>}
                    </form>
                </ErrorBoundary>
                
            </div>
        )
    }
}

export default SignUpPage

SignUpPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func
    }).isRequired
}