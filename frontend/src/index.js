import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {configureStore, combineReducers} from '@reduxjs/toolkit';
import App from './App';


//Importing all Reducers
import authReducer from './Controller/Redux/authslice';
import bugReducer from './Controller/Redux/bugSlice';
import userReducer from './Controller/Redux/userSlice';

//Redux configure
const reducer = combineReducers({
  auth:authReducer,
  bug:bugReducer,
  user:userReducer
})
const store = configureStore({
  reducer
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , 
  document.getElementById('root')
);