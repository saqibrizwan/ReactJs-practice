import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";

class Api extends React.Component {
    constructor (){
        super();
        this.state = {
            users:[]
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                return response.json()
            })
            .then((responseJson) => {

                this.setState({
                    users : responseJson
                })
            })
    }
    render(){
        const {users} = this.state;
        return (
            <section>
                {
                    users.map((user) => {
                        return <li key={user.id}>{user.name}</li>
                    })
                }
            </section>
        )
    }
}