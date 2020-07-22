import React from 'react'
import Modal from './Modal'
import Dropdown from "./Dropdown"
import Button from "./Button"

const App=()=>{

  
  return (
   
        <div 
        className="ui container" 
        style={{
            display: `flex`,
            justifyContent: `space-between`,
            paddingTop: "50px"
            }}>          
            <Dropdown/>                
            <Button/>
            <Modal/>
        </div>
                
  
)
}

export default App
