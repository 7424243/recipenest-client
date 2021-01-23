import React from 'react'

//global variable for components 
const RecipenestContext = React.createContext({
    recipes: [],
    deleteRecipe: () => {},
    addRecipe: () => {},
    editRecipe: () => {},
})

export default RecipenestContext