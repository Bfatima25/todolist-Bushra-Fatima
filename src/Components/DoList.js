import React from 'react';

function DoList () {
    return(
        <div className="DoList">
            <li className="DoList-item"></li>
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