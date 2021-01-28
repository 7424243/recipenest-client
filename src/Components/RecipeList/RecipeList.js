import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import RecipenestContext from '../../RecipenestContext'
import TokenService from '../../services/token-service'
import RecipeCard from '../RecipeCard/RecipeCard'
import './RecipeList.css'

class RecipeList extends Component {

    //allow access to context
    static contextType = RecipenestContext
    
    render() {
        const {recipes} = this.context
        const recipeList = recipes.map(recipe => 
            <li key={recipe.id}>
                <RecipeCard 
                    id={recipe.id}
                    name={recipe.recipe_name}
                    img_url={recipe.img_url}
                />
            </li>
        )
        return (
            <div>
                <ul className='recipe-list'>{recipeList}</ul>

            </div>

        )
    }
}

export default RecipeList