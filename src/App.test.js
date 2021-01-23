import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import renderer from 'react-test-renderer'
import App from './App';

describe('App Component', () => {
  
  //smoke test
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  
  //snapshot test
  it('renders the UI as expected', () => {
    const tree = renderer 
      .create(<BrowserRouter><App/></BrowserRouter>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})


