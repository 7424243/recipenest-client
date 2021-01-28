import React, {Component} from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return {hasError: true, error}
    }

    render() {
        if(this.state.hasError) {
            return <h2 className='error-boundary-heading'>Something went wrong, unable to display at this time.</h2>
        } else {
            return this.props.children
        }
    }
}

export default ErrorBoundary