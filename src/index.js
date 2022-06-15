import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import { Provider } from "react-redux"
import {store} from "./Redux/store"
import axios from 'axios'


axios.defaults.baseURL = "http://localhost:8080"
axios.defaults.headers.post["Content-Type"] = "application/json"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ChakraProvider>
        <App />
      </ChakraProvider>

    </Provider>

  </BrowserRouter>
);


//reportWebVitals();
