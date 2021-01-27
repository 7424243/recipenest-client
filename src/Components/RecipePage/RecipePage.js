import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import RecipenestContext from '../../RecipenestContext'
import './RecipePage.css'
import config from '../../config'
import TokenService from '../../services/token-service'

class RecipePage extends Component {

    //allow access to context
    static contextType = RecipenestContext

    handleClickDelete = e => {
        e.preventDefault()
        const recipeId = this.props.match.params.id
        console.log(recipeId)
        fetch(`${config.API_ENDPOINT}/recipes/${recipeId}`, {
            method: 'DELETE', 
            headers: {
                'Authorization': `basic ${TokenService.getAuthToken()}`
            }
        })
            .then(res => {
                console.log(res)
                if(!res.ok) {
                    return res.json().then(e => Promise.reject(e))
                }
                return res
            })
            .then(() => {
                this.context.deleteRecipe(recipeId)
                this.props.history.push('/recipes')
            })
            .catch(error => {
                console.error({error})
            })
    }

    render() {
        
        const recipeId = parseInt(this.props.match.params.id)
        const {recipes} = this.context
        const getRecipe = (recipes, recipeId) =>
            recipes.find(recipe => recipe.id === recipeId)
        const recipeForPage = getRecipe(recipes, recipeId)

        return (
            <div className='recipe-page-container'>
                <div>
                    <img className='recipe-page-img'src={recipeForPage ? recipeForPage.img_url : null} alt='visual of current recipe'/>
                    <h3>{recipeForPage ? recipeForPage.recipe_name : null}</h3>
                    <a href={recipeForPage ? recipeForPage.url : null} target='_blank' rel='noreferrer'><h5>Clickable Recipe Link</h5></a>
                    <p>Description: {recipeForPage ? recipeForPage.description : null}</p>
                    <p>Notes: {recipeForPage ? recipeForPage.notes : null}</p>
                </div>
                <div className='buttons'>
                    <Link to={`/edit/${this.props.match.params.id}`}><button>Edit</button></Link>
                    <button onClick={this.handleClickDelete}>Delete</button>
                    <Link to='/recipes'><button>Back</button></Link>
                </div>
            </div> 
        )
    }
}

export default RecipePage

