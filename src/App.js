import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import dummyStore from './dummy-store'
import LandingPage from './Components/LandingPage/LandingPage'
import './App.css';
import RecipenestContext from './RecipenestContext';
import RecipeList from './Components/RecipeList/RecipeList';
import Header from './Components/Header/Header';
import RecipePage from './Components/RecipePage/RecipePage';
import AddRecipe from './Components/AddRecipe/AddRecipe';
import SignUpPage from './Components/SignUpPage/SignUpPage';
import LoginPage from './Components/LoginPage/LoginPage';


class App extends Component {

  //set initial component state
  constructor(props) {
    super(props)
    this.state = {
      recipes: []
    }
  }

  //get all recipes when component mounts
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
      <div className='app-container'>
        <Header />
        <RecipenestContext.Provider value={contextValue}>
          <div>
            <Switch>
              <Route
                exact 
                path={'/'}
                component={LandingPage}
              />
              <Route 
                path={'/recipes'}
                component={RecipeList}
              />
              <Route 
                path={'/recipe/:id'}
                component={RecipePage}
              />
              <Route 
                path={'/addRecipe'}
                component={AddRecipe}
              />
              <Route 
                path={'/signup'}
                component={SignUpPage}
              />
              <Route 
                path={'/login'}
                component={LoginPage}
              />
            </Switch>
          </div>
        </RecipenestContext.Provider>
        <footer></footer>
      </div>
    )
  }
}



export default App
