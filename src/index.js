import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/index.js'
import TodoForm from './components/TodoForm.js'
import { Router, Route, browserHistory, Link } from 'react-router'

const App = () => (
    <div>
        <h2>My App</h2>
        <Link to="/About">About</Link>
    </div>
);
const About = (props) => (
    <div>
        <h2>About</h2>
        {props.children}
        <Link to="/">App</Link>
    </div>
);

const sportsImage = () => (
    <div>
        <img src="http://lorempixel.com/400/200/sports/" alt="loading.." />
    </div>
);
const cityImage = () => (
    <div>
        <img src="http://lorempixel.com/400/200/sports/1/" alt="loading.." />
    </div>
);
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}/>
        <Route path="/About" component={About}>
                <Route path="sports" component={sportsImage} />
                <Route path="city" component={cityImage} />
        </Route>
    </Router>
            ,
            document.getElementById('root')
            );