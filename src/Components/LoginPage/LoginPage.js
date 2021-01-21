import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class LoginPage extends Component {
    render() {
        return (
            <>
                <h3>Login!</h3>
                <form action="">
                    <section className="username">
                        <label htmlFor="username">Username: </label>
                        <input type="text" placeholder="username" />
                    </section>
                    <section className="password">
                        <label htmlFor="password">Password: </label>
                        <input type="text" placeholder="password" />
                    </section>
                    <section className="buttons">
                        <Link to="/recipes"><button>Cancel</button></Link>
                        <button>Submit</button>
                    </section>
                </form>
            </>
        )
    }
}

export default LoginPage