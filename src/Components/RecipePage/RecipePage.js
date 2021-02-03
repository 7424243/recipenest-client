import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import RecipenestContext from '../../RecipenestContext'
import './RecipePage.css'
import config from '../../config'
import TokenService from '../../services/token-service'
import PropTypes from 'prop-types'

class RecipePage extends Component {

    //set default state
    state = {
        error: null,
    }

    //allow access to context
    static contextType = RecipenestContext

    //DELETE request
    handleClickDelete = e => {
        e.preventDefault()
        const id = parseInt(this.props.match.params.id)
        console.log(id)
        fetch(`${config.API_ENDPOINT}/recipes/${id}`, {
            method: 'DELETE', 
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`
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
                this.context.deleteRecipe(id)
                this.props.history.goBack()
            })
            .catch(error => {
                this.setState({error})
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
                    <h3 className='recipe-name'>{recipeForPage ? recipeForPage.recipe_name : null}</h3>
                    <a href={recipeForPage ? recipeForPage.url : null} target='_blank' rel='noreferrer'><h5 className='clickable-link'>Clickable Recipe Link 🔗</h5></a>
                    <p className='recipe-notes'>Notes: {recipeForPage ? recipeForPage.notes : null}</p>
                </div>
                <div className='buttons'>
                    <Link to='/my-recipes'><button className='cancel-button'>Back</button></Link>
                    <button onClick={this.handleClickDelete} className='delete-button'>Delete</button>
                    <Link to={`/edit/${this.props.match.params.id}`}><button className='save-button'>Edit</button></Link>
                    
                    
                </div>
            </div> 
        )
    }
}

export default RecipePage

RecipePage.propTypes = {
    history: PropTypes.shape({
        goBack: PropTypes.func
    }).isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string
        })
    }).isRequired,
}

