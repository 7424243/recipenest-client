import React from 'react'

const RecipenestContext = React.createContext({
    recipes: [],
    deleteRecipe: () => {},
    addRecipe: () => {},
    editRecipe: () => {},
})

export default RecipenestContext