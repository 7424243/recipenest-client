import React from 'react'
import ReactDOM from 'react-dom'
import RecipePage from './RecipePage';

it('renders without crashing', () => {
    const defaultProps = {
        match: {
            params: {
                id: 1
            }
        },
        recipes: {
            "id": 1,
            "word_cloud_url": "https://quickchart.io/wordcloud?text=A%20delicious%20snack%20or%20dessert.%20summertime",
            "recipe_name": "Lemon Bars",
            "url": "https://www.erinliveswhole.com/healthy-lemon-bars-gluten-free/?utm_medium=social&utm_source=pinterest&utm_campaign=tailwind_tribes&utm_content=tribes&utm_term=792671610_32946700_178868",
            "description": "A delicious snack or dessert. Summertime",
            "notes": "Paleo"
        }
    }
  const div = document.createElement('div')
  ReactDOM.render(<RecipePage {...defaultProps}/>, div)
  ReactDOM.unmountComponentAtNode(div)
})