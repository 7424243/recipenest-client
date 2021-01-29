import React from 'react'

//global variable for components 
const RecipenestContext = React.createContext({
    recipes: [],
    deleteRecipe: () => {},
    addRecipe: () => {},
    updateRecipe: () => {},
    onLoginSuccess: () => {},
    onSignUpSuccess: () => {}
})

export default RecipenestContext