import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import RecipePage from './RecipePage';

it('renders without crashing', () => {
    const defaultProps = {
        match: {
            params: {
                id: 1
            }
        }
    }
  const div = document.createElement('div')
  ReactDOM.render(<BrowserRouter><RecipePage {...defaultProps}/></BrowserRouter>, div)
  ReactDOM.unmountComponentAtNode(div)
})