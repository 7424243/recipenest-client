import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage'
import './App.css';
import RecipenestContext from './RecipenestContext';
import RecipeList from './Components/RecipeList/RecipeList';
import Header from './Components/Header/Header';
import RecipePage from './Components/RecipePage/RecipePage';
import AddRecipe from './Components/AddRecipe/AddRecipe';
import SignUpPage from './Components/SignUpPage/SignUpPage';
import LoginPage from './Components/LoginPage/LoginPage';
import EditRecipeForm from './Components/EditRecipeForm/EditRecipeForm';
import config from './config'
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary'
import MyRecipes from './Components/MyRecipes/MyRecipes'

class App extends Component {

  //set initial component state
  state = {
    recipes: [],
    loginStatus: false,
    signUpStatus: false
  }

  //get all recipes when component mounts
  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/recipes`, {
      method: 'GET'
    })
      .then(res => {
        if(!res.ok) {
          return res.json().then(error => Promise.reject(error))
        }
        return res.json()
      })
      .then(recipes => {
        this.setState({recipes})
      })
      .catch(error => {
        console.error({error})
      })
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
handleUpdateRecipe = (updatedRecipe) => {
  const recipeIndex = this.state.recipes.findIndex(recipe => 
    (recipe.id == updatedRecipe.id))
  const clonedRecipes = [...this.state.recipes]
  clonedRecipes[recipeIndex] = updatedRecipe
  this.setState({
    recipes: clonedRecipes
  })

}

//udpates state's loginStatus
onLoginSuccess = () => {
  this.setState({loginStatus: true})
}

//updates state's logoutStatus
onLogoutSuccess = () => {
  this.setState({loginStatus: false})
}

//updates state's signUpStatus
onSignUpSuccess = () => {
  this.setState({signUpStatus: true})
}

  render () {

    const contextValue = {
      recipes: this.state.recipes,
      deleteRecipe: this.handleDeleteRecipe,
      addRecipe: this.handleAddRecipe,
      updateRecipe: this.handleUpdateRecipe,
      onLoginSuccess: this.onLoginSuccess,
      onLogoutSuccess: this.onLogoutSuccess,
      onSignUpSuccess: this.onSignUpSuccess,
    }

    return(
      <div className='app-container'>
        <ErrorBoundary>
          <Header />
        </ErrorBoundary>
        <RecipenestContext.Provider value={contextValue}>
          <div>
            <Switch>
              <ErrorBoundary>
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
                  path={'/my-recipes'}
                  component={MyRecipes}
                />
                <Route 
                  path={'/addRecipe'}
                  component={AddRecipe}
                />
                <Route 
                  path={'/edit/:id'}
                  component={EditRecipeForm}
                />
                <Route 
                  path={'/signup'}
                  component={SignUpPage}
                />
                <Route 
                  path={'/login'}
                  component={LoginPage}
                />
              </ErrorBoundary>
            </Switch>
          </div>
        </RecipenestContext.Provider>
        <footer></footer>
      </div>
    )
  }
}



export default App
