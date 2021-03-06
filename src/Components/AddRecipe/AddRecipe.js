import React, {Component} from 'react'
import RecipenestContext from '../../RecipenestContext'
import TokenService from '../../services/token-service'
import config from '../../config'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {isWebUri} from 'valid-url'
import ValidationError from '../ValidationError/ValidationError.js'
import './AddRecipe.css'

class AddRecipe extends Component {

    state = {
        recipe_name: '',
        url: '',
        notes: '',
        img_url: 'https://i.pinimg.com/originals/71/fd/79/71fd79ff32acd3aab5821a64c54ea563.jpg',
        error: null
    }

    static contextType = RecipenestContext

    addName = e => {
        this.setState({recipe_name: e.target.value})
    }
    
    addUrl = e => {
        this.setState({url: e.target.value})
    }

    addNotes = e => {
        this.setState({notes: e.target.value})
    }

    addImgUrl = e => {
        this.setState({img_url: e.target.value})
    }

    validateRecipeName() {
        const name = this.state.recipe_name.trim()
        if(name.length === 0) {
            return 'A recipe name is required'
        }
    }

    validateUrl() {
        const url = this.state.url.trim()
        if(!isWebUri(url)) {
            return 'A valid URL is required'
        }
    }

    validateNotes() {
        const notes = this.state.notes.trim()
        if(notes.length === 0) {
            return 'Notes are required'
        }
    }
    
    validateImgUrl() {
        const img_url = this.state.img_url.trim()
        if(!isWebUri(img_url)) {
            return 'Please provide a valid url for the image'
        }
    }

    //POST new values
    handleSubmit = e => {
        e.preventDefault()
        let payload = Object.assign({}, this.state)
        payload.user_id = TokenService.getUserIdFromToken()
        fetch(`${config.API_ENDPOINT}/recipes/`, {
            method: 'POST',
            body: JSON.stringify(payload),
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
            .then(data => {
                this.context.addRecipe(data)
                this.props.history.push('/my-recipes')
            })
            .catch(error => {
                this.setState({error})
                console.error({error})
            })
    }

    render() {
        return (
            <div className='add-recipe-container'>
                <h3>New Recipe</h3>
                <ErrorBoundary>
                    <form 
                        className='add-recipe-form' 
                        onSubmit={this.handleSubmit}
                    >
                        <p className='required-field'>* required field</p>
                        <section className='name'>
                            <label htmlFor='name'>Recipe Name: * </label>
                            <input 
                                type='text' 
                                aria-label='recipe name'
                                name='name' 
                                placeholder='recipe name' 
                                required 
                                onChange={this.addName}
                            />
                            {this.state.recipe_name && 
                            <ValidationError message={this.validateRecipeName()}/>}
                        </section>
                        <section className='url'>
                            <label htmlFor='url'>Recipe URL: * </label>
                            <input 
                                type='url' 
                                aria-label='recipe url'
                                name='url' 
                                placeholder='https://www.recipe.com' 
                                required 
                                onChange={this.addUrl}
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
                                aria-label='Modifications for next time? Likes? Dislikes?'
                                placeholder='Modifications for next time? Likes? Dislikes?' 
                                required 
                                onChange={this.addNotes} 
                            />
                            {this.state.notes &&
                            <ValidationError message={this.validateNotes()}/>}
                        </section>
                        <section className='url'>
                            <label htmlFor='img-url'>Image URL: (or leave blank to use a default image)</label>
                            <input 
                                type='url' 
                                name='img-url' 
                                aria-label='add image url or leave blank to use a default image'
                                placeholder='https://www.recipeimage.com' 
                                onChange={this.addImgUrl}
                            />
                            {this.state.url &&
                            <ValidationError message={this.validateImgUrl()}/>}
                        </section>
                        <section className='buttons'>
                            <Link to='/my-recipes'><button className='cancel-button'>Cancel</button></Link>
                            <button type='submit' className='save-button'>Save</button>
                        </section>
                    </form>
                </ErrorBoundary>
            </div>
        )
    }
}

export default AddRecipe

AddRecipe.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func
    }).isRequired
}