import React, {createContext, useContext} from "react";
import {ContextDevTool} from 'react-context-devtool';
import DisplayModal from "./ContextDisplayModal"
import Country from "./ContextListCountry"
const Context=createContext();


export const ContexGeneralForDebuging =(props)=> {
   const displayModal = useContext(DisplayModal)
   const country = useContext(Country)

   return(
        <Context.Provider value={{ displayModal: {...displayModal}, country:{...country}}}>
            <ContextDevTool 
                context={Context} 
                id="Context" 
                displayName="Context"
               />
            {props.children}
        </Context.Provider>
    )
}