import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';

import '../assets/stylesheets/application.scss';
import App from './components/App';
import RandomMovie from './components/RandomMovie';

const root = document.getElementById('root');
if (root) {
    ReactDOM.render(
        <HashRouter basename={process.env.REPO_NAME}>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/random-movie" component={RandomMovie} />
            </Switch>
        </HashRouter>, root
    );
}
