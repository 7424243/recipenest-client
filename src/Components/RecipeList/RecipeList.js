//To-Do:
//Add Error Message(s)

import React, {Component} from 'react'
import RecipenestContext from '../../RecipenestContext'
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
                <h3>All Recipes</h3>
                <ul className='recipe-list'>{recipeList}</ul>
            </div>

        )
    }
}

export default RecipeList