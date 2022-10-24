import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';
import App from './App';

const config = {
  apiKey: 'AIzaSyAgg_yDXt1Qoutu7hcOdXXOrFhiVBHjWeE',
  authDomain: 'start-cbaa5.firebaseapp.com',
  databaseURL: 'https://start-cbaa5.firebaseio.com',
  projectId: 'start-cbaa5',
  storageBucket: 'start-cbaa5.appspot.com',
  messagingSenderId: '633975796254',
  appId: '1:633975796254:web:0c0205b34d2c6a4e38740f',
  measurementId: 'G-CYK469N5JS',
};

firebase.initializeApp(config);
firebase.database();

ReactDOM.render(<App />, document.getElementById('root'));
