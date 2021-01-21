import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import RecipenestContext from '../../RecipenestContext'

class RecipePage extends Component {
    static contextType = RecipenestContext

    render() {
        console.log(this.context)
        const recipeId = this.props.match.params.id
        const {recipes} = this.context
        const getRecipe = (recipes, recipeId) =>
            recipes.find(recipe => recipe.id === recipeId)
        const recipeForPage = getRecipe(recipes, recipeId)
        console.log(recipeForPage)

        return (
            <>
                <div>
                    <img src={recipeForPage.word_cloud_url} alt="word cloud from recipe description"/>
                    <h3>{recipeForPage.recipe_name}</h3>
                    <Link to={recipeForPage.url}><h5>Link</h5></Link>
                    <p>Description: {recipeForPage.description}</p>
                    <p>Additional Notes: {recipeForPage.notes}</p>
                </div>
                <div>
                    <Link><button>Edit</button></Link>
                    <Link><button>Delete</button></Link>
                    <Link><button>Back</button></Link>
                </div>
            </> 
        )
    }
}

export default RecipePage

