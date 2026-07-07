import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { firebaseImpl } from './util/firebaseUtils';

firebaseImpl.database();

ReactDOM.render(<App />, document.getElementById('root'));
