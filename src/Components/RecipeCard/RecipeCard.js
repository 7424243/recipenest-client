import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import RecipenestContext from '../../RecipenestContext'
import PropTypes from 'prop-types'
import './RecipeCard.css'

class RecipeCard extends Component {

    static contextType = RecipenestContext
    
    renderRecipePage(id, name, img_url) {
        return (
            <Link to={`/recipe/${id}`}>
                <div className='recipe-card'>
                    <img className='recipe-card-img' src={img_url} alt='word cloud that describes the recipe' />
                    <h4 className='recipe-card-name'>{name}</h4>
                </div>
            </Link>
        )
    }
    
    //the recipe card on the landing page links to /login instead of a dynamic route
    renderLoginPage(name, img_url) {
        return (
            <Link to={`/login`}>
                <div className='recipe-card'>
                    <img className='recipe-card-img' src={img_url} alt='from recipe website' />
                    <h4 className='recipe-card-name'>{name}</h4>
                </div>
            </Link>
        )
    }

    render() {
        const {id, name, img_url} = this.props
        return ( 
            <div>
                {id === -1 
                ?  this.renderLoginPage(name, img_url)
                : this.renderRecipePage(id, name, img_url)}
            </div>

        )
    }
}

export default RecipeCard

RecipeCard.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    img_url: PropTypes.string.isRequired,
}