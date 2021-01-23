import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import RecipenestContext from '../../RecipenestContext'
import './RecipeCard.css'

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