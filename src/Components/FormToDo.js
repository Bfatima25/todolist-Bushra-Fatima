import React from 'react';

function FormToDo ({setInputText}) {
    const inputDoHandler = (e) => {
        setInputText(e.target.value);
    };
    const submitDoHandler  = (e) => {
        e.preventDefault();
    }
    return(
        <form>
            <input onChange={inputDoHandler} type="text" className="dolist-input" />
            <button onClick={submitDoHandler} className="dolist-button" type="submit">
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