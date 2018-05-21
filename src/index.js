import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import Greeting from './components/Greeting';
import Journal from './components/Journal';
import NotFound from './components/NotFound';
import './index.css';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/greeting" component={Greeting} />
            <Route path="/journal" component={Journal}/>
            <Route path="*" component={NotFound} />
        </Switch>
    </Router>, 
    document.getElementById('root')
);
registerServiceWorker();
