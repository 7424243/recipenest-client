import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import renderer from 'react-test-renderer'
import LoginPage from './LoginPage';


describe('LoginPage Component', () => {

  const props = {
    history: {
        push: jest.fn()
    }
  }
  
  //smoke test
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><LoginPage {...props}/></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  
  //snapshot test
  it('renders the UI as expected', () => {
    const tree = renderer 
      .create(<BrowserRouter><LoginPage {...props}/></BrowserRouter>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  
})
