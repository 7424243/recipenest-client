import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import renderer from 'react-test-renderer'
import SignUpPage from './SignUpPage';

describe('SignUpPage Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><SignUpPage/></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })  

  it('renders the UI as expected', () => {
    const tree = renderer 
      .create(<BrowserRouter><SignUpPage/></BrowserRouter>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
