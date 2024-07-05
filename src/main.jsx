import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Theme from './Componens/Theme/Theme';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ContextProvider from './Auth/AuthContext';
// import Theme from './Theme';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>

    <BrowserRouter>

    <App/>
    </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
