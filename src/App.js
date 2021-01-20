
import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
import dummyStore from './dummy-store'
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
      <p>Hello world!</p>
    )
  }
}



export default App
