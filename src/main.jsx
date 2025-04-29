import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import Contextprovider from './context/contextprovider.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Contextprovider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Contextprovider>
  </React.StrictMode>
);
