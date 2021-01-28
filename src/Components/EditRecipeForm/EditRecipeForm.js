import React, {Component} from 'react'
import RecipenestContext from '../../RecipenestContext'
import {Link} from 'react-router-dom'
import './EditRecipeForm.css'
import config from '../../config'
import TokenService from '../../services/token-service'

class EditRecipeForm extends Component {

    state = {
        error: null,
        id: '',
        recipe_name: '',
        url: '',
        description: '',
        notes: '',
        img_url: '',
        date_created: '',
        user_id: '',
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
                    description: data.description,
                    notes: data.notes,
                    img_url: data.img_url,
                    user_id: data.user_id
                })
            })
            .catch(error => {
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
    handleChangeDescription = e => {
        this.setState({description: e.target.value})
    }
    handleChangeNotes = e => {
        this.setState({notes: e.target.value})
    }
    handleChangeImgUrl = e => {
        this.setState({img_url: e.target.value})
    }

    //PATCH updated values
    handleSubmit = e => {
        e.preventDefault()
        const recipeId = this.props.match.params.id
        const {recipe_name, url, description, notes, img_url} = this.state
        const updatedRecipe = {recipeId, recipe_name, url, description, notes, img_url}
        fetch(`${config.API_ENDPOINT}/recipes/${recipeId}`, {
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
                this.props.history.push('/recipes')
            })
            .catch(error => {
                console.error({error})
            })

    }

    resetFields = (newFields) => {
        this.setState({
            recipe_name: newFields.recipe_name || '',
            url: newFields.url || '',
            description: newFields.description || '',
            notes: newFields.notes || '',
            img_url: newFields.img_url || ''
        })
    }


    render() {
        return (
            <div className='edit-recipe-container'>
                <h3>Edit Recipe</h3>
                <form 
                    className='edit-recipe-form' 
                    onSubmit={this.handleSubmit}
                >
                    <section className='name'>
                        <label htmlFor='name'>Recipe Name: </label>
                        <input 
                            type='text' 
                            aria-label={`recipe name: ${this.state.recipe_name}`}
                            name='name'  
                            required 
                            value={this.state.recipe_name} 
                            onChange={this.handleChangeName}
                        />
                    </section>
                    <section className='url'>
                        <label htmlFor='url'>Recipe URL: </label>
                        <input 
                            type='url' 
                            aria-label={`recipe url: ${this.state.url}`}
                            name='url' 
                            required 
                            value={this.state.url} 
                            onChange={this.handleChangeUrl}/>
                    </section>
                    <section className='like'>
                        <label htmlFor='like'>Description: </label>
                        <textarea 
                            name='like' 
                            cols='30' 
                            rows='5' 
                            aria-label={`description: ${this.state.description}`}
                            required 
                            value={this.state.description} 
                            onChange={this.handleChangeDescription} 
                        />
                    </section>
                    <section className='notes'>
                        <label htmlFor='notes'>Notes: </label>
                        <textarea 
                            name='notes' 
                            cols='30' 
                            rows='5' 
                            aria-label={`notes: ${this.state.notes}`}
                            required 
                            value={this.state.notes} 
                            onChange={this.handleChangeNotes} 
                        />
                    </section>
                    <section className='url'>
                        <label htmlFor='img-url'>Recipe URL: </label>
                        <input 
                            type='img-url' 
                            aria-label={`recipe url: ${this.state.img_url}`}
                            name='url'  
                            required 
                            value={this.state.url} 
                            onChange={this.handleChangeImgUrl}/>
                    </section>
                    <section className='buttons'>
                        <Link to='/recipes'><button>Cancel</button></Link>
                        <button type='submit'>Save</button>
                    </section>
                </form>
            </div>
        )
    }

}

export default EditRecipeForm