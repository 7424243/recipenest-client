import { shallow } from 'enzyme'
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import renderer from 'react-test-renderer'
import EditRecipeForm from './EditRecipeForm'

describe('EditRecipeForm Component', () => {

    const match = {
            params: {
                id: '123'
            }
    }

    //smoke test
    it('renders without crashing', () => {
        // shallow(<EditRecipeForm match={match}/>)
        const div = document.createElement('div')
        ReactDOM.render(<BrowserRouter><EditRecipeForm match={match}/></BrowserRouter>, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    //snapshot test
    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<BrowserRouter><EditRecipeForm match={match}/></BrowserRouter>)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
    
})