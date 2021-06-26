import React from "react";

import Card from "../../UI/Card";
import ToDoItem from "../ToDoItem/ToDoItem";
import styles from "./ToDoList.module.css";

const ToDoList = (props) => {
  const removeItemHandler = (id) => {
    props.onRemove(id);
  };

  if (props.items.length === 0) {
    return (
      <div className={styles["text-container"]}>
        <p className={styles.text}>Nothing to do! :)</p>
      </div>
    );
  }

  return (
    <Card className={styles.items}>
      <ul>
        {props.items.map((item) => (
          <ToDoItem key={item.id} onRemove={removeItemHandler} item={item}></ToDoItem>
        ))}
      </ul>
    </Card>
  );
};

export default ToDoList;
