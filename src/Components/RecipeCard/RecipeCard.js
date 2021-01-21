import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import RecipenestContext from '../../RecipenestContext'

class RecipeCard extends Component {
    static contextType = RecipenestContext

    render() {
        const {id, name, word_cloud_url} = this.props
        return (
            <div>
                <img src={word_cloud_url} alt="word cloud that describes the recipe" />
                <Link to={`../recipe/${id}`}><h4>{name}</h4></Link>
            </div>
        )
    }

}

export default RecipeCard