import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import config from '../../config'
import './SignUpPage.css'

class SignUpPage extends Component {

    state = {
        full_name: '',
        user_name: '',
        password: '',
        nickname: ''
    }

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
                this.props.history.push('/login')
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
                <form 
                    className='sign-up-form'
                    onSubmit={this.handleSubmit}
                >
                    <section className='fullname'>
                        <label htmlFor='fullname'>Full Name: </label>
                        <input 
                            type='text' 
                            placeholder='Full Name'
                            required 
                            onChange={this.handleAddFullname}
                        />
                    </section>
                    <section className='url'>
                        <label htmlFor='username'>Username: </label>
                        <input 
                            type='text' 
                            placeholder='username' 
                            required
                            onChange={this.handleAddUsername}
                        />
                    </section>
                    <section className='password'>
                        <label htmlFor='password'>Password: </label>
                        <input 
                            type='password' 
                            placeholder='password' 
                            required
                            onChange={this.handleAddPassword}
                        />
                    </section>
                    <section className='nickname'>
                        <label htmlFor='nickname'>Nickname (option): </label>
                        <input 
                            type='text' 
                            placeholder='optional nickname' 
                            onChange={this.handleAddNickname}/>
                    </section>
                    <section className='buttons'>
                        <Link to='/recipes'><button>Cancel</button></Link>
                        <button type='submit'>Submit</button>
                    </section>
                </form>
            </div>
        )
    }
}

export default SignUpPage