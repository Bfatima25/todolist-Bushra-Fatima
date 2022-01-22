import React from 'react';
import DoList from './DoList';

function ToDoList ({ dolist }) {
    return (
        <div className="dolist-container">
            <ul className="todo-list">
                {dolist.map((dolist) => (
                    <DoList text={dolist.text} id={dolist.id} />
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;