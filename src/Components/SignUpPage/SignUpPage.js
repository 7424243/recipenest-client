import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './SignUpPage.css'

class SignUpPage extends Component {
    render() {
        return (
            <div className='sign-up-container'>
                <h3>Sign Up!</h3>
                <form className='sign-up-form'>
                    <section className='fullname'>
                        <label htmlFor='fullname'>Full Name: </label>
                        <input type='text' placeholder='Full Name' />
                    </section>
                    <section className='url'>
                        <label htmlFor='username'>Username: </label>
                        <input type='text' placeholder='username' />
                    </section>
                    <section className='password'>
                        <label htmlFor='password'>Password: </label>
                        <input type='text' placeholder='password' />
                    </section>
                    <section className='nickname'>
                        <label htmlFor='nickname'>Nickname (option): </label>
                        <input type='text' placeholder='optional nickname' />
                    </section>
                    <section className='buttons'>
                        <Link to='/recipes'><button>Cancel</button></Link>
                        <button>Submit</button>
                    </section>
                </form>
            </div>
        )
    }
}

export default SignUpPage