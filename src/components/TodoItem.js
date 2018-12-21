import React from 'react';
import './TodoItem.css'
function TodoItem() {
    return (
        <li className="todo-item">
            <input type="checkbox" value="box1" /><span>Box 1</span>
        </li>
    )
}

export default TodoItem;