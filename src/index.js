import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import reducer from './reduxStore/Reducer';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index-style.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const Store = createStore(reducer);
ReactDOM.render(
<Provider store={Store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
