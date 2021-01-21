import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import RecipeCard from './RecipeCard';

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BrowserRouter><RecipeCard/></BrowserRouter>, div)
  ReactDOM.unmountComponentAtNode(div)
})