import React from 'react';

function FormToDo () {
    return(
        <form>
            <input type="text" className="dolist-input" />
            <button className="dolist-button" type="submit">
                <i className="fas fa-plus-circle"></i>
            </button>
            <div className="select">
                <select name="dolist" className="filter-dolist">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="incomplete">InComplete</option>
                </select>
            </div>
        </form>
    );
}

export default FormToDo;