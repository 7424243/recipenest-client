import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import config from '../../config'
import RecipenestContext from '../../RecipenestContext'
import PropTypes from 'prop-types'
import './LoginPage.css'

class LoginPage extends Component {

    state = {
        user_name: '',
        password: '',
        error: null,
        isPageLoading: false
    }

    static contextType = RecipenestContext

    //Login with JWT authorization
    handleSubmitJwtAuth = e => {
        e.preventDefault()
        this.setState({isPageLoading: true})
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
                this.context.onLoginSuccess()
                this.setState({isPageLoading: false})
                this.props.history.push('/my-recipes')
            })
            .catch(err => {
                this.setState({isPageLoading: false})
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
        const {isPageLoading} = this.state
        return (
            <>
                <h3>Login!</h3>
                <p className='login-demo-creds'>Demo Username: demo</p>
                <p className='login-demo-creds'>Demo Password: Password0!</p>
                <form 
                    className='login-form'
                    onSubmit={this.handleSubmitJwtAuth}
                >
                    <section className='username'>
                        <label htmlFor='username'>Username: </label>
                        <input 
                            type='text' 
                            placeholder='username' 
                            autoComplete='on'
                            required
                            onChange={this.handleUsername}
                        />
                    </section>
                    <section className='password'>
                        <label htmlFor='password'>Password: </label>
                        <input 
                            type='password' 
                            placeholder='password' 
                            autoComplete='on'
                            required
                            onChange={this.handlePassword}
                        />
                    </section>
                    {isPageLoading ? <div className='lds-default'><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> : null}
                    <section className='buttons'>
                        <button type='submit' className='cancel-button'>Login</button>
                        <Link to='/signup'><button className='sign-up-button'>Sign Up</button></Link>
                        <Link to='/'><button className='save-button'>Cancel</button></Link>
                    </section>
                    {this.state.error && <p className='login-error'>{this.state.error}. Please try logging in again, or Sign Up for an account.</p>}
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