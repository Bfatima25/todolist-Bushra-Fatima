import React from 'react';
import DoList from './DoList';

function ToDoList () {
    return (
        <div className="dolist-container">
            <ul className="todo-list"></ul>
            <DoList />
        </div>
    );
};

export default ToDoList;