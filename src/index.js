import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PrimeReactProvider } from 'primereact/api';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css'; // Core PrimeReact styles
import 'primeflex/primeflex.css';
import "primereact/resources/themes/lara-light-teal/theme.css";
import "primeflex/themes//primeone-dark.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

const mountHere = root.shadowRoot;

const options = { 
  appendTo: mountHere, 
  styleContainer: mountHere,
  locale: 'pt-BR'
};

root.render(
  <React.StrictMode>
    <PrimeReactProvider value={options}>
      <App />
    </PrimeReactProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
