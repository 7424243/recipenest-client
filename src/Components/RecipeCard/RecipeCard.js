import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import RecipenestContext from '../../RecipenestContext'
import PropTypes from 'prop-types'
import './RecipeCard.css'

class RecipeCard extends Component {

    //allow access to context
    static contextType = RecipenestContext

    render() {
        const {id, name, img_url} = this.props
        return (
            <Link to={`/recipe/${id}`}>
                <div className='recipe-card'>
                    <img className='recipe-card-img' src={img_url} alt='from recipe website' />
                    <h4 className='recipe-card-name'>{name}</h4>
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