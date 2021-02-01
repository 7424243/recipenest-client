import React from 'react'
import PropTypes from 'prop-types'

function ValidationError(props) {
    //if we have a props.message, we display it in a div, otherwise, return nothing
    if(props.message) {
        return (
            <div className='error'>{props.message}</div>
        )
    }
    return <></>
}

export default ValidationError


ValidationError.propTypes = {
    message: PropTypes.string
}