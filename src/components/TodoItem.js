import React, { Component } from 'react'
import PropTypes from 'prop-types';
export class TodoItem extends Component {
    getStyle = () => {
        if(this.props.todo.completed){
            return{ 
                background: '#f4f4f4',
                padding: '10px',
                borderBottm: '1px #ccc dotted',
                textDecoration: 'line-through'
            }
        } else {
            return {
                background: '#f4f4f4',
                padding: '10px',
                borderBottm: '1px #ccc dotted',
                textDecoration: 'none'
            }
        }
    } 

    markComplete = (e) => {

    }
    
    render() {
        const { id,title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />{' '}
                { title }
                <button onClick={this.props.delTodo.bind(this, id)}style={btnStyle}>x</button>
                </p>
            </div>
        );
    }
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursoer: 'pointer',
    float: 'right'
}
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
