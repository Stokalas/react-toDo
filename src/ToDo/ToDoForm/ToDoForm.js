import React, { useState } from "react";

import Card from "../../UI/Card";
import Button from "../../UI/Button";
import styles from "./ToDoForm.module.css";

const getTodayString = () =>{
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();
   if(dd<10){
          dd='0'+dd
      } 
      if(mm<10){
          mm='0'+mm
      } 
  
  today = yyyy+'-'+mm+'-'+dd;
  return today;
}

const ToDoForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [error, setError] = useState(false);

  const addItemHandler = (event) => {
    event.preventDefault();
    if (enteredTitle.trim().length < 1 || enteredDate.length === 0){
      setError(true);
      return;
    }
    props.onAdd({id: Math.random(), title: enteredTitle, date:enteredDate, dateCreated: new Date()});
    setEnteredTitle("");
    setEnteredDate("");
    setError(false);
  };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  return (
    <Card className={styles.input}>
      <form  onSubmit={addItemHandler}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          onChange={titleChangeHandler}
          value={enteredTitle}
        />
        <label htmlFor="until">Until</label>
        <input
          id="until"
          type="date"
          min-value={getTodayString()}
          max-value="2024-12-31"
          onChange={dateChangeHandler}
          value={enteredDate}
        />
        {error ? <p>Please enter information on both fields!</p>: ""}
        <Button type="submit" className={styles.formBtn}>
          Add
        </Button>
      </form>
    </Card>
  );
};

export default ToDoForm;
