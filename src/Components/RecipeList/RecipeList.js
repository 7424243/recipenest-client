import React, {Component} from 'react'
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
                    word_cloud_url={recipe.word_cloud_url}
                />
            </li>
        )
        return (
            <div className='recipe-list-container'>
                <ul className='recipe-list'>{recipeList}</ul>
            </div>
        )
    }
}

export default RecipeList