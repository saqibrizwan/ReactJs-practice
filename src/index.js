import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/index.js'
import TodoForm from './components/TodoForm.js'
import { Router, Route, browserHistory } from 'react-router'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={TodoForm} />
        <Route path="/TodoList" component={TodoList} />
    </Router>
    ,
    document.getElementById('root')
);