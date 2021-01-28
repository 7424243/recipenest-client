import React from 'react'

//global variable for components 
const RecipenestContext = React.createContext({
    recipes: [],
    deleteRecipe: () => {},
    addRecipe: () => {},
    updateRecipe: () => {},
    onLoginSuccess: () => {},
    onLogoutSuccess: () => {}
})

export default RecipenestContext