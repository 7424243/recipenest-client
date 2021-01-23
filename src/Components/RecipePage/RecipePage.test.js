import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import renderer from 'react-test-renderer'
import RecipePage from './RecipePage'

describe('RecipePage Component', () => {

    //testing props
    const props = {
        match: {
            params: {
                id: 'Test_Recipe_Id'
            }
        }
    }

    //smoke test
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<BrowserRouter><RecipePage {...props}/></BrowserRouter>, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    //snapshot test
    it('renders the UI as expected', () => {
        const tree = renderer 
          .create(<BrowserRouter><RecipePage {...props}/></BrowserRouter>)
          .toJSON()
        expect(tree).toMatchSnapshot()
      })
})
