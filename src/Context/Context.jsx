import { createContext, useContext, useState,useEffect, useReducer  } from "react";

const DentStates = createContext()


export const initialState = { theme: "light", user: [] };

export const ContextGlobal = createContext(undefined);

const themes = {
    dark:{
      theme:false,
      bgColor:'#0e1419',
      color: 'white'
    },
    light:{
      theme:true,
      bgColor:'white',
      color: 'black'
    }
  }
  
  const initialThemeState = themes.light
  const themeReducer = (state, action) =>{
    switch(action.type){
      case 'SWITCH_DARK':
        return themes.dark
      case 'SWITCH_LIGHT':
        return themes.light
      default:
        throw new Error
    }
  }


// iniciar favs
const inicialFavState = JSON.parse (localStorage.getItem('favs')) || []

const favReducer =(state, action) => {
    switch (action.type){
        case 'ADD_FAV':
            return [...state, action.payload]
        default:
            throw new Error
    }
}


const Context = ({children}) => {

    const [themeState, themeDispash] = useReducer (themeReducer, initialThemeState)

    const [dentList, setDentist] = useState ([])
    // para favs
    const [favState, favDispatch] = useReducer(favReducer, inicialFavState)

    const url = `https://jsonplaceholder.typicode.com/users`


   useEffect (() => {
        localStorage.setItem('favs', JSON.stringify(favState) )
    }, [favState]) 
    
    useEffect (() => {
        fetch (url)
        .then(res => res.json())
        .then(data => setDentist(data))
    }, [])

    return(
        <DentStates.Provider value = {{dentList, setDentist, favState, favDispatch, themeState, themeDispash}}>
            {children}
        </DentStates.Provider>
    )


}

export default Context
export const useDentStates = () => useContext(DentStates)