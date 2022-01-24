import React from 'react';
import DoList from './DoList';

function ToDoList ({ doslist, setDolist, filteredDoslist }) {
    return (
        <div className="dolist-container">
            <ul className="todo-list">
                {doslist.map((dolist) => (
                    <DoList dolist={dolist} doslist={doslist} setDolist={setDolist} key={dolist.id} text={dolist.text} />
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;