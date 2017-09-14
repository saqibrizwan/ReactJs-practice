import React from 'react'
import PropTypes from 'prop-types';

const TodoForm = (props) => {
    return (
        <form onSubmit={props.addTask}>
            <input type="text"
                   value={props.currentTask}
                   onChange={props.updateTask}
                />
            <button type="submit">Submit</button>
        </form>
    )
};
TodoForm.PropTypes = {
    currentTask: PropTypes.func.isRequired,
    updateTask: PropTypes.number.isRequired,
    addTask :  PropTypes.func.isRequired
}
export default TodoForm;