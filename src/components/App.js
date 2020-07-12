import React from 'react'
import {ModalState as ModalContext} from "../context/ContextDisplayModal"
import {CountryState as CountryContext} from "../context/ContextListCountry"
import Modal from './Modal'
import Dropdown from "./Dropdown"
import Button from "./Button"


const App=()=>{

  
  return (
   
        <div className="ui container" style={{display: `flex`, justifyContent: `space-between`, paddingTop: "50px"}}>
            <ModalContext>

                <CountryContext>
                    <Dropdown/>
                </CountryContext>
                
                <Button/>
                <Modal/>

            </ModalContext>          
        </div>
                
  
)
}

export default App
