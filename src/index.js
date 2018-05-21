import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import Journal from './components/Journal';
import NotFound from './components/NotFound';
import './index.css';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/journal" component={Journal}/>
            <Route path="*" component={NotFound} />
        </Switch>
    </Router>, 
    document.getElementById('root')
);
registerServiceWorker();
