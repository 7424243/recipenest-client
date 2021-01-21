import React, {Component} from 'react'
import RecipenestContext from '../../RecipenestContext'
import RecipeCard from '../RecipeCard/RecipeCard'

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
            <>
                <ul>{recipeList}</ul>
            </>
        )
    }
}

export default RecipeList