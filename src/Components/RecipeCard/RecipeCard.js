//To-Do:
//Add Error Message(s)

import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import RecipenestContext from '../../RecipenestContext'
import './RecipeCard.css'
import PropTypes from 'prop-types'

class RecipeCard extends Component {

    //allow access to context
    static contextType = RecipenestContext

    render() {
        const {id, name, img_url} = this.props
        return (
            <Link to={`/recipe/${id}`}>
                <div className='recipe-card'>
                    <img className='recipe-card-img' src={img_url} alt='word cloud that describes the recipe' />
                    <h4>{name}</h4>
                </div>
            </Link>
        )
    }

}

export default RecipeCard

RecipeCard.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    img_url: PropTypes.string.isRequired,
}