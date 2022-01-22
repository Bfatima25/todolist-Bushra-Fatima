import React from 'react';

function DoList ({text}) {
    return(
        <div className="DoList">
            <li className="DoList-item">{text}</li>
            <button className="checklist-btn">
                <i className="fas fa-check-square"></i>
            </button>
            <button className="deletelist-btn">
                <i className="fas fa-trash-alt"></i>
            </button>
        </div>
    );
}

export default DoList;