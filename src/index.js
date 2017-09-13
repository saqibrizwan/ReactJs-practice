import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './components/TodoItem.js'
import TodoForm from './components/TodoForm.js'
import './index.css'

class TodoList extends React.Component {
    constructor (){
        super();
        this.changeStatus = this.changeStatus.bind(this);
        this.updateTask = this.updateTask.bind(this);
        this.addTask = this.addTask.bind(this);
        this.state = {
            tasks: [
                {
                    name: 'Buy Milk',
                    completed: false
                },
                {
                    name: 'Buy Cheese',
                    completed: false
                },
                {
                    name: 'Buy Bread',
                    completed: false
                },
                {
                    name: 'Buy Water',
                    completed: false
                }],
            currentTask: ''
        };
    }
    updateTask(newValue){
        this.setState({
            currentTask:newValue.target.value
        })
    }
    changeStatus(index){
        var tasks = this.state.tasks;
        var task = tasks[index];
        task.completed = !task.completed;
        this.setState({
            task:tasks
        })
    }
    addTask(evt){
        evt.preventDefault();
        let tasks = this.state.tasks;
        let currentTask = this.state.currentTask;
        tasks.push({
            name: currentTask,
            completed: false
        })
        this.setState({
            tasks:tasks
        })
    }
    render(){
        return (
            <section>
                <TodoForm
                    currentTask={this.state.currentTask}
                    updateTask={this.updateTask}
                    addTask={this.addTask}
                    />
                <ul>
                    {
                        this.state.tasks.map((task, index) => {
                            return  <TodoItem key={task.name} clickHandler={this.changeStatus} index={index} details={task}/>
                        })
                    }
                </ul>
            </section>
        )
    }
}
ReactDOM.render(<TodoList />, document.getElementById('root'));