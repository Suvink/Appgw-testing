import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StytchProvider } from '@stytch/react';
import { StytchUIClient } from '@stytch/vanilla-js';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
const stytch = new StytchUIClient('public-token-test-23e4f81d-8bf0-4b3d-87e9-a24750844d59');

root.render(
  <React.StrictMode>
    <StytchProvider stytch={stytch}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StytchProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
