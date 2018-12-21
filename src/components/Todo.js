import React, { Component } from 'react'
import "./Todo.css"
import TodoItem from './TodoItem'

class Todo extends React.Component {
    render() {
        return (
            <div className="todo-list">
                <h3>Todo List</h3>
                <ul>
                    <TodoItem />
                    <TodoItem />
                    <TodoItem />
                    <TodoItem />
                </ul>
            </div>
        )
    }
}
export default Todo