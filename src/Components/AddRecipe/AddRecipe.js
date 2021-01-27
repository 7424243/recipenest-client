import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import RecipenestContext from '../../RecipenestContext'
import TokenService from '../../services/token-service'
import './AddRecipe.css'
import config from '../../config'

class AddRecipe extends Component {

    state = {
        recipe_name: '',
        url: '',
        description: '',
        notes: '',
        img_url: '',
        user_id: 2
    }

    //allow access to context
    static contextType = RecipenestContext

    //use inputs to update state
    addName = e => {
        this.setState({recipe_name: e.target.value})
    }
    addUrl = e => {
        this.setState({url: e.target.value})
    }
    addDescription = e => {
        this.setState({description: e.target.value})
    }
    addNotes = e => {
        this.setState({notes: e.target.value})
    }
    addImgUrl = e => {
        this.setState({img_url: e.target.value})
    }

    //POST updated values
    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
        fetch(`${config.API_ENDPOINT}/recipes/`, {
            method: 'POST',
            body: JSON.stringify(this.state),
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
                this.props.history.push('/recipes')
            })
            .catch(error => {
                console.error({error})
            })
    }

    render() {
        return (
            <div className='add-recipe-container'>
                <h3>New Recipe</h3>
                <form 
                    className='add-recipe-form' 
                    onSubmit={this.handleSubmit}
                >
                    <section className='name'>
                        <label htmlFor='name'>Recipe Name: </label>
                        <input 
                            type='text' 
                            aria-label='recipe name'
                            name='name' 
                            placeholder='recipe name' 
                            required 
                            onChange={this.addName}
                        />
                    </section>
                    <section className='url'>
                        <label htmlFor='url'>Recipe URL: </label>
                        <input 
                            type='url' 
                            aria-label='recipe url'
                            name='url' 
                            placeholder='https://www.recipe.com' 
                            required 
                            onChange={this.addUrl}
                        />
                    </section>
                    <section className='like'>
                        <label htmlFor='like'>Description: </label>
                        <textarea 
                            name='like' 
                            cols='30' 
                            rows='5' 
                            aria-label='A brief description and/or keywords to describe the recipe '
                            placeholder='A brief description and/or keywords to describe the recipe' 
                            required 
                            onChange={this.addDescription}
                        />
                    </section>
                    <section className='notes'>
                        <label htmlFor='notes'>Notes: </label>
                        <textarea 
                            name='notes' 
                            cols='30' 
                            rows='5' 
                            aria-label='Modifications for next time? Likes? Dislikes?'
                            placeholder='Modifications for next time? Likes? Dislikes?' 
                            required 
                            onChange={this.addNotes} 
                        />
                    </section>
                    <section className='url'>
                        <label htmlFor='img-url'>Image URL: </label>
                        <input 
                            type='url' 
                            name='img-url' 
                            placeholder='https://www.recipe.com' 
                            required 
                            onChange={this.addImgUrl}
                        />
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

export default AddRecipe