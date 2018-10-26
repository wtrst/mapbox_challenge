import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Map';
import * as serviceWorker from './serviceWorker';

const app = document.getElementById('root');

ReactDOM.render(<App store={store} />, app);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
