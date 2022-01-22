import React, { useState } from 'react';
import './App.css';
import FormToDo from "./Components/FormToDo";
import ToDoList from "./Components/ToDoList";

function App() {
  return (
    <div className="ToDolist">
      <header>
        <h1>What's The Plan Today?</h1>
      </header>
      <FormToDo />
      <ToDoList />
    </div>
  );
}

export default App;
