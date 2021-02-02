import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import config from '../../config'
import RecipenestContext from '../../RecipenestContext'
import TokenService from '../../services/token-service'
import RecipeCard from '../RecipeCard/RecipeCard'
import './MyRecipes.css'

class MyRecipes extends Component {

    //set default state
    state = {
        recipes: [],
        error: null
    }

    //allow access to content
    static contextType = RecipenestContext

    //get all of the user's recipes when the component mounts
    componentDidMount() {
        const user_id = TokenService.getUserIdFromToken()
        fetch(`${config.API_ENDPOINT}/recipes/users/${user_id}`, {
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
                this.setState({error})
                console.error({error})
            })
    }


    render() {
        const {recipes} = this.state
        const recipeList = recipes.length === 0 ? <p>It looks like you haven't saved any recipe notes yet! Please enter a recipe note by clicking on the '+' button to get started!</p> : recipes.map(recipe => 
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
                 <ul className='my-recipes-list'>
                     {recipeList}
                 </ul>
                <div className='container'>
                    <Link to={'/addRecipe'}><button className='add-button'>+</button></Link>
                </div>
            </>
        )
    }
}

export default MyRecipes