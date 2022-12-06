import React from "react";
import { createContext, useReducer } from "react";

export const ThemeContext = createContext()

//3, it tkaes the current state->blue, and action->dispatch
//
const themeReducer =(state, action)=>{
    if(action.type === "CHANGE_MODE"){
        return {...state, mode: action.payload}
    }
            
    else{
        return state
    }
           
    }


export function ThemeProvider({ children }){
    const changeMode=(mode) => {
        dispatch({type: "CHANGE_MODE", payload: mode})
    }

    //2,when we pssed the color react look the reducerfunction associated
    //with that dispatch, and fires the themereducer function
    //4, now the state is updated->passed color
    const [state, dispatch] = useReducer(themeReducer, {
        mode: "light"
    })


    return (
        <ThemeContext.Provider value={{...state, changeMode}}>
            {/* //all the cildren components get access to the theme context */}
            {children}
        </ThemeContext.Provider>
    )
}