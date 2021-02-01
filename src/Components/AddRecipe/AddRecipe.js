//To-Do:
//Add PropTypes
//Add Error Message(s)

import React, {Component} from 'react'
import RecipenestContext from '../../RecipenestContext'
import TokenService from '../../services/token-service'
import './AddRecipe.css'
import config from '../../config'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import { Link } from 'react-router-dom'

class AddRecipe extends Component {

    constructor(props) {
        super(props)
        this.state = {
            recipe_name: '',
            url: '',
            notes: '',
            img_url: 'https://i.pinimg.com/originals/71/fd/79/71fd79ff32acd3aab5821a64c54ea563.jpg',
        }
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
    addNotes = e => {
        this.setState({notes: e.target.value})
    }
    addImgUrl = e => {
        this.setState({img_url: e.target.value})
    }


    //POST updated values
    handleSubmit = e => {
        e.preventDefault()
        let payload = Object.assign({}, this.state)
        payload.user_id = TokenService.getUserIdFromToken()
        fetch(`${config.API_ENDPOINT} /`, {
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
                            <label htmlFor='img-url'>Image URL: (or leave blank to use a default image)</label>
                            <input 
                                type='url' 
                                name='img-url' 
                                aria-label='add image url or leave blank to use a default image'
                                placeholder='https://www.recipe.com' 
                                onChange={this.addImgUrl}
                            />
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

export default AddRecipe