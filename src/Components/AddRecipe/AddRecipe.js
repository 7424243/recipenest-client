import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import RecipenestContext from '../../RecipenestContext'

class AddRecipe extends Component {

    static contextType = RecipenestContext

    render() {
        return (
            <>
                <h3>New Recipe</h3>
                <form>
                    <section className="name">
                        <label for="name">Recipe Name: </label>
                        <input type="text" placeholder="Recipe Name"/>
                    </section>
                        <section className="url">
                        <label for="url">Recipe URL: </label>
                        <input type="url" placeholder="https://www.recipe.com" />
                    </section>
                    <section className="like">
                        <label for="like">Why Did You Like It?: </label>
                        <textarea name="like" id="" cols="30" rows="10" placeholder="What did you like about this recipe?"></textarea>
                    </section>
                    <section className="notes">
                        <label for="notes">Additional Notes: </label>
                        <textarea name="notes" id="" cols="30" rows="10" placeholder="Modifications for next time?"></textarea>
                    </section>
                    <section className="buttons">
                        <Link href="/recipes"><button>Cancel</button></Link>
                        <button>Save</button>
                    </section>
                </form>
            </>
        )
    }
}

export default AddRecipe