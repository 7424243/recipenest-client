
import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
import dummyStore from './dummy-store'
import LandingPage from './Components/LandingPage/LandingPage'
import './App.css';
import RecipenestContext from './RecipenestContext';


class App extends Component {
  state = {
    recipes: []
  }

  componentDidMount() {
    this.setState(dummyStore)
  }

  //updates state to include recipes that do not have the specified recipeId
  handleDeleteRecipe = recipeId => {
    this.setState({
      recipes: this.state.recipes.filter(recipe => recipe.id !== recipeId)
    })
  }

  //updates state to include newly create recipe
  handleAddRecipe = recipe => {
    this.setState({
      recipes: [...this.state.recipes, recipe]
    })
  }

  //updates state to include edited recipe
  // handleEditRecipe = editedRecipe => {
  //   this.setState({
  //     recipes: []
  //   })
  // }



  render () {
    const contextValue = {
      recipes: this.state.recipes,
      deleteRecipe: this.handleDeleteRecipe,
      addRecipe: this.handleAddRecipe,
    }
    return(
      <RecipenestContext.Provider value={contextValue}>
        <div>
          <Route
            exact 
            path='/'
            component={LandingPage}
          />
        </div>
      </RecipenestContext.Provider>

    )
  }
}



export default App
