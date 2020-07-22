import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {ModalState as ModalContext} from "./context/ContextDisplayModal"
import {CountryState as CountryContext} from "./context/ContextListCountry"
import {ContexGeneralForDebuging} from "./context/ContexGeneralForDebuging"


ReactDOM.render(
    <ModalContext>
      <CountryContext>
        <ContexGeneralForDebuging>
          <App />
        </ContexGeneralForDebuging>
      </CountryContext>
    </ModalContext>
  
    ,
  document.getElementById('root')
);
