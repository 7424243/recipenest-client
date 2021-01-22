import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import RecipenestContext from '../../RecipenestContext'
import RecipeCard from '../RecipeCard/RecipeCard'
import './RecipeList.css'

class RecipeList extends Component {
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
                <div className='container'>
                <Link to={'/addRecipe'}><button className='add-button'>+</button></Link>
                </div>
                
            </div>

        )
    }
}

export default RecipeList