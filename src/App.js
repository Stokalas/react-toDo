import React, { useState } from "react";

import "./App.css";

import ToDoForm from "./ToDo/ToDoForm/ToDoForm";
import ToDoList from "./ToDo/ToDoList/ToDoList";

function App() {
  const [toDoList, setToDoList] = useState([]);

  const addItemHandler = toDo => {
    setToDoList((prevState) => {return [...prevState, toDo]})
  }

  const removeItemHandler = toDoID => {
    setToDoList((prevState) => {return prevState.filter(item => item.id !== toDoID)})
  }

  return (
    <div>
      <div className="title">
        ToDo App
      </div>
      <ToDoForm onAdd={addItemHandler}/>
      <ToDoList items={toDoList} onRemove={removeItemHandler}/>
    </div>
  );
}

export default App;
