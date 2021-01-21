import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import RecipenestContext from '../../RecipenestContext'
import './AddRecipe.css'

class AddRecipe extends Component {

    static contextType = RecipenestContext

    render() {
        return (
            <>
                <h3>New Recipe</h3>
                <form className='add-recipe-form'>
                    <section className="name">
                        <label htmlFor="name">Recipe Name: </label>
                        <input type="text" placeholder="Recipe Name"/>
                    </section>
                        <section className="url">
                        <label htmlFor="url">Recipe URL: </label>
                        <input type="url" placeholder="https://www.recipe.com" />
                    </section>
                    <section className="like">
                        <label htmlFor="like">Description: </label>
                        <textarea name="like" id="" cols="30" rows="10" placeholder="The word cloud will be make out of this input"></textarea>
                    </section>
                    <section className="notes">
                        <label htmlFor="notes">Additional Notes: </label>
                        <textarea name="notes" id="" cols="30" rows="10" placeholder="Modifications for next time? Likes? Dislikes?"></textarea>
                    </section>
                    <section className="buttons">
                        <Link to="/recipes"><button>Cancel</button></Link>
                        <button>Save</button>
                    </section>
                </form>
            </>
        )
    }
}

export default AddRecipe