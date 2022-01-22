import React from 'react';

function DoList ({text, dolist, doslist, setDolist }) {
    const deleteHandler = () => {
        setDolist(doslist.filter(el => el.id !== dolist.id));
    };
    return(
        <div className="DoList">
            <li className="DoList-item">{text}</li>
            <button className="checklist-btn">
                <i className="fas fa-check-square"></i>
            </button>
            <button onClick={deleteHandler} className="deletelist-btn">
                <i className="fas fa-trash-alt"></i>
            </button>
        </div>
    );
}

export default DoList;