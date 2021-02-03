import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import config from '../../config'
import RecipenestContext from '../../RecipenestContext'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import PropTypes from 'prop-types'
import './SignUpPage.css'

class SignUpPage extends Component {

    //set default state
    state = {
        full_name: '',
        user_name: '',
        password: '',
        nickname: '',
        error: null
    }

    //allow access to context
    static contextType = RecipenestContext

    //POST a new user
    handleSubmit = e => {
        e.preventDefault()
        // Promise.all([
        //     fetch(`${config.API_ENDPOINT}/users`, {
        //         method: 'POST',
        //         headers: {
        //             'content-type': 'application/json',
        //         },
        //         body: JSON.stringify(this.state)
        //     }),
        //     fetch(`${config.API_ENDPOINT}/auth/login`, {
        //         method: 'POST',
        //         headers: {
        //             'content-type': 'application/json',
        //         },
        //         body: JSON.stringify(this.state)
        //     })
        // ])
        //     .then(([usersResponse, loginResponse]) => {
        //         if(!usersResponse.ok)
        //             return usersResponse.json().then(error => Promise.reject(error))
        //         if(!loginResponse.ok)
        //             return loginResponse.json().then(error => Promise.reject(error))
        //         return(Promise.all([usersResponse.json(), loginResponse.json()]))
        //     })
        //     .then(([user, login]) => {
        //         console.log('login', login)
        //         this.context.onSignUpSuccess()
        //         TokenService.saveAuthToken(login.authToken)
        //         this.context.onLoginSuccess()
        //         this.props.history.push('/my-recipes')
        //     })
        //     .catch(err => {
        //         this.setState({error: err.error})
        //         console.error({err})
        //     })
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
            .then(() => {
                this.context.onSignUpSuccess()
                this.props.history.push('/login')
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
                                required 
                                onChange={this.handleAddFullname}
                            />
                        </section>
                        <section className='url'>
                            <label htmlFor='username'>Username: * </label>
                            <input 
                                type='text' 
                                placeholder='username' 
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
                                required
                                onChange={this.handleAddPassword}
                            />
                        </section>
                        <section className='nickname'>
                            <label htmlFor='nickname'>Nickname (optional): </label>
                            <input 
                                type='text' 
                                placeholder='optional nickname' 
                                onChange={this.handleAddNickname}/>
                        </section>
                        <section className='buttons'>
                            <Link to='/'><button className='cancel-button'>Cancel</button></Link>
                            <button type='submit' className='save-button'>Submit</button>
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