import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import config from '../../config'
import RecipenestContext from '../../RecipenestContext'
import TokenService from '../../services/token-service'
import RecipeCard from '../RecipeCard/RecipeCard'

class MyRecipes extends Component {

    state = {
        recipes: [],
    }

    static contextType = RecipenestContext

    componentDidMount() {
        const user_id = TokenService.getUserIdFromToken()
        fetch(`${config.API_ENDPOINT}/recipes/users/${this.state.user_id}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res => {
                if(!res.ok) {
                    return res.json().then(e => Promise.reject(e))
                }
                return res.json()
            })
            .then(recipes => {
                this.setState({recipes})
            })
            .catch(error => {
                console.error({error})
            })
    }

    render() {
        const {recipes} = this.state
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
            <>
                <h3>My Recipes</h3>
                <ul>{recipeList}</ul>
                <div className='container'>
                {TokenService.hasAuthToken() 
                    ? <Link to={'/addRecipe'}><button className='add-button'>+</button></Link>
                    : null
                }
                </div>
        </>
        )
    }
}

export default MyRecipes