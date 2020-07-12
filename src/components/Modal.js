import React, {useContext} from 'react';
import ReactDOM from 'react-dom'
import ContextModal from "../context/ContextDisplayModal"

const Modal = props => {
    const context = useContext(ContextModal);
    const display = context.state.display ? "active" : ""
    
    const handleClick=()=>{
        context.onDisplayChange()
    }
    return ReactDOM.createPortal(
        <div 
            className={`ui dimmer ${display}`} 
            onClick={handleClick}
        >
            <div 
                className="ui modal active" 
                onClick={e=>e.stopPropagation()}
            >
                <div className="header">
                    <i className="hand point down icon"></i>
                </div>
                    <div className="content">
                    <p>{context.state.message}</p>
                </div>
                <div className="actions">
                    <div 
                        className="ui primary basic button"
                        onClick={()=>handleClick()}
                    >
                        Hide
                    </div>
                </div>
            </div>
        </div>,
        document.querySelector("#modal")
    )
};

export default Modal
