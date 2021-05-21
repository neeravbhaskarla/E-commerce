import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/style/main.css'
import App from './App';
import {StoreContextProvider} from './store/use-context'
ReactDOM.render(
  <StoreContextProvider>
    <App />
  </StoreContextProvider>,
  document.getElementById('root')
  );