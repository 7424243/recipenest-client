//To-Do:
//Add PropTypes
//Add Error Message(s)

import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import config from '../../config'
import RecipenestContext from '../../RecipenestContext'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import './SignUpPage.css'
import PropTypes from 'prop-types'

class SignUpPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            full_name: '',
            user_name: '',
            password: '',
            nickname: '',
            error: null
        }
    }


    static contextType = RecipenestContext

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
            .then(() => {
                this.context.onSignUpSuccess()
                this.props.history.push('/login')
            })
            .catch(err => {
                this.setState({error: err.error})
                console.error({err})
            })
    }

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
                                <p>Must be at least 8 characters long and contain at least 1 upper case, 1 lower case, 1 number, and 1 special character.</p>
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
                                <Link to='/'><button>Cancel</button></Link>
                                <button type='submit'>Submit</button>
                            </section>
                            {this.state.error && <p>{this.state.error.message}. Please try again.</p>}
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