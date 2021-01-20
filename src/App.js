
import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
import dummyStore from './dummy-store'
import LandingPage from './Components/LandingPage/LandingPage'
import './App.css';


class App extends Component {
  state = {
    recipes: []
  }

  componentDidMount() {
    this.setState(dummyStore)
  }

  render () {
    const {recipes} = this.state
    return(
      <div>
        <Route
          exact 
          path='/'
          component={LandingPage}
        />
      </div>
    )
  }
}



export default App
