import React, {createContext, useReducer} from "react"
const Context=createContext()

const initialState={
    option: "State",
    open: false
}

const countryReducer=(state,action)=>{
    switch (action.type) {
        case "SET_COUNTRY":
            return {...state, option:action.payload};
        case "OPEN_CLOSE":
            return {...state, open:action.payload};
        default:
            return state;
    }
}

export const CountryState =(props)=>{
    const [country, dispatch] = useReducer(countryReducer, initialState);

    const onChangeCountry=(country)=>{
        dispatch({type: "SET_COUNTRY", payload: country})
    }

    const onClick=(status)=>{
        status=== undefined ? dispatch({type: "OPEN_CLOSE", payload: !country.open}) : dispatch({type: "OPEN_CLOSE", payload: status})
        
    }
    return(
        <Context.Provider value={{...country, onChangeCountry, onClick}}>
            {props.children}
        </Context.Provider>
    )
}


export default Context;