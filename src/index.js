import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Provider} from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
import { gallerySlice } from './galleryState';

const store = configureStore({
  reducer: {gallerySlice}
}); 

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

