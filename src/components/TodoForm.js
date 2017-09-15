import React from 'react'
import PropTypes from 'prop-types';
import { Router, Route, browserHistory, Link } from 'react-router'

const TodoForm = (props) => {
    return (
        <section>
            <form onSubmit={props.addTask}>
                <input type="text"
                       value={props.currentTask}
                       onChange={props.updateTask}
                    />
                <button type="submit">Submit</button>
            </form>
            <Link to="/TodoList">TodoList</Link>
        </section>

    )
};
TodoForm.PropTypes = {
    currentTask: PropTypes.func.isRequired,
    updateTask: PropTypes.number.isRequired,
    addTask :  PropTypes.func.isRequired
}
export default TodoForm;