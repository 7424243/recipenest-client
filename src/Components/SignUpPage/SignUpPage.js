import React, {Component} from 'react'

class SignUpPage extends Component {
    render() {
        return (
            <>
                <h3>Sign Up!</h3>
                <form action="">
                    <section className="fullname">
                        <label for="fullname">Full Name: </label>
                        <input type="text" placeholder="Full Name" />
                    </section>
                    <section className="url">
                        <label for="username">Username: </label>
                        <input type="text" placeholder="username" />
                    </section>
                    <section className="password">
                        <label for="password">Password: </label>
                        <input type="text" placeholder="password" />
                    </section>
                    <section className="nickname">
                        <label for="nickname">Nickname (option): </label>
                        <input type="text" placeholder="optional nickname" />
                    </section>
                    <section className="buttons">
                        <button>Cancel</button>
                        <button>Submit</button>
                    </section>
                </form>
        </>
        )
    }
}

export default SignUpPage