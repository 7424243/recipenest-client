import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import renderer from 'react-test-renderer'
import EditRecipeForm from './EditRecipeForm'

describe('EditRecipeForm Component', () => {

    const props = {
        match: {
            params: {
                id: 'id'
            }
        },
        history: {
            push: jest.fn()
        }
    }

    //smoke test
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<BrowserRouter><EditRecipeForm {...props}/></BrowserRouter>, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    //snapshot test
    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<BrowserRouter><EditRecipeForm {...props}/></BrowserRouter>)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
    
})