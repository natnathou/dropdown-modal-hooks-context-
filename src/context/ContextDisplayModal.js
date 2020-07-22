import React, {useState} from "react";
const Context= React.createContext(false);

export const ModalState =(props)=> {
    const [display, setDisplay] = useState(false)
    const [message, setMessage] = useState("")
    
    const onDisplayChange=(message)=>{
        setMessage(message);
        setDisplay(!display);
    }

    return(
        <Context.Provider value={{...{},state:{display, message}, onDisplayChange}}>
            {props.children}
        </Context.Provider>
    )
}
export default Context;

