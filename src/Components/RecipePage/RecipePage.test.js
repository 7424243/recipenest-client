import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import RecipePage from './RecipePage'

it('renders without crashing', () => {
    const div = document.createElement('div')
    const props = {
        match: {
            params: {
                id: 'Test_Recipe_Id'
            }
        }
    }
    ReactDOM.render(<BrowserRouter><RecipePage {...props}/></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
})