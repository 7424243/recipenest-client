import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import renderer from 'react-test-renderer'
import MyRecipes from './MyRecipes';

describe.only('MyRecipes Component', () => {

    const user_id = 1

    const authToken = `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkI…W8ifQ.jMh6Xgt4RT-uXSBpgBhHri4dmHB-OfZSoIwQZaAGUYg`

  //smoke test
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><MyRecipes {...user_id}/></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  //snapshot test
  it('renders the UI as expected', () => {
    const tree = renderer 
      .create(<BrowserRouter><MyRecipes/></BrowserRouter>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  
})