import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './bootstrap.min.css'
import './index.css';
import App from './App';
import firebase from "firebase/app";
import reportWebVitals from './reportWebVitals';
import store from './store';


var firebaseConfig = {
  apiKey: "AIzaSyB-0vCpo4pous0L4T8JnVYow4sBmzPazk8",
  authDomain: "brightjewlers.firebaseapp.com",
  projectId: "brightjewlers",
  storageBucket: "brightjewlers.appspot.com",
  messagingSenderId: "617649719291",
  appId: "1:617649719291:web:39be8ecd5e11ef362f2d5e",
  measurementId: "G-J6KJN748X8"
};
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      </Provider>,
  </React.StrictMode>,
  document.getElementById('root'));
 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
