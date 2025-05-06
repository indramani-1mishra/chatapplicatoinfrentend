import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import Contextprovider from './context/contextprovider.jsx';
import { Provider } from 'react-redux';
import store from './redux/userdetails/userslice.jsx';



const root = createRoot(document.getElementById('root'));

root.render(
  
   
 <Provider store={store}>
   <Contextprovider>
    
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Contextprovider>
   
 </Provider>
);
