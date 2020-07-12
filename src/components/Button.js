import React, {useContext} from 'react'
import ContextDisplayModal from '../context/ContextDisplayModal'


const Button = () => {
    const context = useContext(ContextDisplayModal)
    return (
        <div>
            <button 
                className="ui primary button"
                onClick={e =>{
                context.onDisplayChange("their is an error message")                
            }}>Try Me!
            </button>
        </div>
    )
}

export default Button
