import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext"

import React from 'react'

export const useTheme =() =>{
    const context = useContext(ThemeContext);
    if(context === undefined){
        throw new Error("userTheme() must be inside a ThemeProvider")
    }
    return context;
}