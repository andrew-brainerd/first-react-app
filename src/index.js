import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App name="Andrew"/>, 
    document.getElementById('root')
);
registerServiceWorker();
