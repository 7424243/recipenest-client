import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import renderer from 'react-test-renderer'
import NavBar from './NavBar';

describe('NavBar Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><NavBar/></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders the UI as expected', () => {
    const tree = renderer 
      .create(<BrowserRouter><NavBar/></BrowserRouter>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
