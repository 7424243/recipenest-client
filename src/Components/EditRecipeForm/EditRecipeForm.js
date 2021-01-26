import React, {Component} from 'react'
import RecipenestContext from '../../RecipenestContext'
import {Link} from 'react-router-dom'
import './EditRecipeForm.css'

class EditRecipeForm extends Component {
    static contextType = RecipenestContext

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

    componentDidMount() {

    }

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

    handleSubmit = e => {}

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
                <form className='edit-recipe-form' onSubmit={this.handleSubmit}>
                    <section className='name'>
                        <label htmlFor='name'>Recipe Name: </label>
                        <input type='text' name='name' placeholder='Recipe Name' required value={this.state.recipe_name} onChange={this.handleChangeName}/>
                    </section>
                        <section className='url'>
                        <label htmlFor='url'>Recipe URL: </label>
                        <input type='url' name='url' placeholder='https://www.recipe.com' required value={this.state.url} onChange={this.handleChangeUrl}/>
                    </section>
                    <section className='like'>
                        <label htmlFor='like'>Description: </label>
                        <textarea name='like' cols='30' rows='10' placeholder='A brief description and/or keywords to describe the recipe' required value={this.state.description} onChange={this.handleChangeDescription}></textarea>
                    </section>
                    <section className='notes'>
                        <label htmlFor='notes'>Notes: </label>
                        <textarea name='notes' cols='30' rows='10' placeholder='Modifications for next time? Likes? Dislikes?' required value={this.state.notes} onChange={this.handleChangeNotes}></textarea>
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