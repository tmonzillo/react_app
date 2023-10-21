import React, { useState, createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Auth from './components/auth';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

export const TokenContext = createContext(null);

function Router(){

  const [token, setToken] = useState('');

  return (
    <React.StrictMode>
      <TokenContext.Provider value={{token, setToken}}>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' Component={Auth} />
            <Route exact path='/movies' Component={App} />
          </Routes>
        </BrowserRouter>
      </TokenContext.Provider>
    </React.StrictMode>
  
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
