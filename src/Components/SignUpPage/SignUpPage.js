import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class SignUpPage extends Component {
    render() {
        return (
            <>
                <h3>Sign Up!</h3>
                <form action="">
                    <section className="fullname">
                        <label htmlFor="fullname">Full Name: </label>
                        <input type="text" placeholder="Full Name" />
                    </section>
                    <section className="url">
                        <label htmlFor="username">Username: </label>
                        <input type="text" placeholder="username" />
                    </section>
                    <section className="password">
                        <label htmlFor="password">Password: </label>
                        <input type="text" placeholder="password" />
                    </section>
                    <section className="nickname">
                        <label htmlFor="nickname">Nickname (option): </label>
                        <input type="text" placeholder="optional nickname" />
                    </section>
                    <section className="buttons">
                        <Link to='/recipes'><button>Cancel</button></Link>
                        <button>Submit</button>
                    </section>
                </form>
        </>
        )
    }
}

export default SignUpPage