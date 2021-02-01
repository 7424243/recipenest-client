import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import renderer from 'react-test-renderer'
import RecipeCard from './RecipeCard';

describe('RecipeCard Component', () => {

  const props = {
    id: 1,
    name: 'name',
    img_url: 'url'
  }

  //smoke test
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><RecipeCard {...props}/></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  //snapshot test
  it('renders the UI as expected', () => {
    const tree = renderer 
      .create(<BrowserRouter><RecipeCard {...props}/></BrowserRouter>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

})
