import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <KindeProvider
      clientId="85d4520fca794449bc64929780ad2440"
      domain="https://suvin.kinde.com"
      redirectUri="http://localhost:3001"
      logoutUri="http://localhost:3001"
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </KindeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
