import React from 'react';
import PropTypes from 'prop-types';


class TodoItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isEditing: false
        };
        this.editForm = this.editForm.bind(this);
        this.editList = this.editList.bind(this)
        this.isEditing = this.isEditing.bind(this)
        this.updateList = this.updateList.bind(this)
    }
    editForm(){
        return (
            <form onSubmit={this.updateList}>
                <input type="text" ref={ (value) =>{
                 this.input = value
                }} defaultValue={this.props.details.name}/>
                <button type="Submit">Update Item</button>
            </form>
        )
    }
    editList(){
        return(
            <li onClick = { () => {
                 this.props.clickHandler(this.props.index)
                 }} className={this.props.details.completed ? 'completed' : ''}>
                {this.props.details.name}
                <button onClick = {(evt) => {
                 evt.stopPropagation();
                 this.props.deleteTask(this.props.index)
                 }
                 }>Delete</button>
                <button onClick = {(evt) => {
                 evt.stopPropagation();
                 this.isEditing()
                 }
                 }>Edit</button>
            </li>
        )
    }
    isEditing(){
        const {isEditing} = this.state;
        this.setState({
            isEditing: !isEditing
        })
    }
    updateList(evt){
        evt.preventDefault();
        this.props.editTask(this.props.index,this.input.value);
        this.isEditing()
    }
    render(){
        const  {isEditing} = this.state;
        return (
            <section>
                {
                    isEditing ?this.editForm()   : this.editList()
                }
            </section>
        )
    }
}
TodoItem.PropTypes = {
    clickHandler: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    deleteTask :  PropTypes.func.isRequired,
    editTask: PropTypes.func.isRequired,
    details: PropTypes.object.isRequired
}
export default TodoItem;