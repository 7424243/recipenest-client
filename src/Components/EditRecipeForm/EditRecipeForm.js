//To-Do:
//Add Error Message(s)

import React, {Component} from 'react'
import RecipenestContext from '../../RecipenestContext'
import {Link} from 'react-router-dom'
import './EditRecipeForm.css'
import config from '../../config'
import TokenService from '../../services/token-service'
import PropTypes from 'prop-types'
import {isWebUri} from 'valid-url'
import ValidationError from '../ValidationError/ValidationError.js'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

class EditRecipeForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            error: null,
            id: '',
            recipe_name: '',
            url: '',
            notes: '',
            img_url: '',
            date_created: '',
            user_id: '',
        }       
    }


    //allow access to context
    static contextType = RecipenestContext

    
    //GET recipe's values
    componentDidMount() {
        const recipeId = this.props.match.params.id
        fetch(`${config.API_ENDPOINT}/recipes/${recipeId}`, {
            method: 'GET'
        })
            .then(res => {
                if(!res.ok) {
                    return res.json().then(error => Promise.reject(error))
                }
                return res.json()
            })
            .then(data => {
                this.setState({
                    recipe_name: data.recipe_name,
                    url: data.url,
                    notes: data.notes,
                    img_url: data.img_url,
                    user_id: data.user_id
                })
                
            })
            .catch(error => {
                this.setState({error})
                console.error(error)
            })

    }

    //update any changes to values
    handleChangeName = e => {
        this.setState({recipe_name: e.target.value})
    }
    handleChangeUrl = e => {
        this.setState({url: e.target.value})
    }
    handleChangeNotes = e => {
        this.setState({notes: e.target.value})
    }
    handleChangeImgUrl = e => {
        this.setState({img_url: e.target.value})
    }

    //validation functions for user inputs
    validateRecipeName() {
        const name = this.state.recipe_name.trim()
        if(name.length === 0) {
            return 'A recipe name is required in order to submit'
        }
    }
    validateUrl() {
        const url = this.state.url.trim()
        if(!isWebUri(url)) {
            return 'A valid URL is required in order to submit'
        }
    }
    validateNotes() {
        const notes = this.state.notes.trim()
        if(notes.length === 0) {
            return 'Notes are required in order to submit'
        }
    }
    validateImgUrl() {
        const img_url = this.state.img_url.trim()
        if(!isWebUri(img_url)) {
            return 'Please provide a valid url for the image'
        }
    }

    //PATCH updated values
    handleSubmit = e => {
        e.preventDefault()
        const id = parseInt(this.props.match.params.id)
        const {recipe_name, url, description, notes, img_url, user_id} = this.state
        const updatedRecipe = {id, recipe_name, url, description, notes, img_url, user_id}
        fetch(`${config.API_ENDPOINT}/recipes/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(updatedRecipe),
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res => {
                if(!res.ok) {
                    return res.json().then(error => Promise.reject(error))
                }
            })
            .then(() => {
                this.resetFields(updatedRecipe)
                this.context.updateRecipe(updatedRecipe)
                this.props.history.push('/my-recipes')
            })
            .catch(error => {
                this.setState({error})
                console.error({error})
            })

    }

    resetFields = (newFields) => {
        this.setState({
            recipe_name: newFields.recipe_name || '',
            url: newFields.url || '',
            notes: newFields.notes || '',
            img_url: newFields.img_url || ''
        })
    }


    render() {
        return (
            <div className='edit-recipe-container'>
                <h3>Edit Recipe</h3>
                <ErrorBoundary>
                    <form 
                        className='edit-recipe-form' 
                        onSubmit={this.handleSubmit}
                    >
                        <p className='required-field'>* required field</p>
                        <section className='name'>
                            <label htmlFor='name'>Recipe Name: * </label>
                            <input 
                                type='text' 
                                aria-label={`recipe name: ${this.state.recipe_name}`}
                                name='name'  
                                required 
                                value={this.state.recipe_name} 
                                onChange={this.handleChangeName}
                            />
                            {this.state.recipe_name && 
                            <ValidationError message={this.validateRecipeName()}/>}
                        </section>
                        <section className='url'>
                            <label htmlFor='url'>Recipe URL: * </label>
                            <input 
                                type='url' 
                                aria-label={`recipe url: ${this.state.url}`}
                                name='url' 
                                required 
                                value={this.state.url} 
                                onChange={this.handleChangeUrl}
                            />
                            {this.state.url &&
                            <ValidationError message={this.validateUrl()}/>}
                        </section>
                        <section className='notes'>
                            <label htmlFor='notes'>Notes: * </label>
                            <textarea 
                                name='notes' 
                                cols='30' 
                                rows='5' 
                                aria-label={`notes: ${this.state.notes}`}
                                required 
                                value={this.state.notes} 
                                onChange={this.handleChangeNotes} 
                            />
                            {this.state.url &&
                            <ValidationError message={this.validateUrl()}/>}
                        </section>
                        <section className='url'>
                            <label htmlFor='img-url'>Image URL: </label>
                            <input 
                                type='img-url' 
                                aria-label={`recipe url: ${this.state.img_url}`}
                                name='url'  
                                required 
                                value={this.state.img_url} 
                                onChange={this.handleChangeImgUrl}
                            />
                            {this.state.img_url &&
                            <ValidationError message={this.validateImgUrl()}/>}
                        </section>
                        <section className='buttons'>
                            <Link to='/my-recipes'><button>Cancel</button></Link>
                            <button type='submit'>Save</button>
                        </section>
                    </form>
                </ErrorBoundary>
                
            </div>
        )
    }

}

export default EditRecipeForm

EditRecipeForm.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func
    }).isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string
        })
    }).isRequired,
}