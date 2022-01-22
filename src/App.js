import React, { useState } from 'react';
import './App.css';
import FormToDo from "./Components/FormToDo";
import ToDoList from "./Components/ToDoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todolist, setTodolist] = useState([]);
  return (
    <div className="ToDoList-app">
      <header>
        <h1>What's The Plan Today?</h1>
      </header>
    </div>
  );
}

export default App;
