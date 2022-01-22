import React from 'react';

function FormToDo ({setInputText, dolist, setDolist, inputText}) {
    const inputDoHandler = (e) => {
        setInputText(e.target.value);
    };
    const submitDoHandler  = (e) => {
        e.preventDefault();
        setDolist([
            ...dolist, {text: inputText, completed: false, id: Math.random()*1000 },
        ]);
        setInputText("");
    };
    return(
        <form>
            <input value={inputText} onChange={inputDoHandler} type="text" className="dolist-input" />
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