import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import renderer from 'react-test-renderer'
import RecipeList from './RecipeList';

describe('RecipeList Component', () => {

  //smoke test
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><RecipeList/></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  //snapshot test
  it('renders the UI as expected', () => {
    const tree = renderer 
      .create(<BrowserRouter><RecipeList/></BrowserRouter>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  
})
