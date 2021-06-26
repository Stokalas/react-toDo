import React from "react";

import styles from "./ToDoItem.module.css";

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

const getDifferenceInDays = (itemDate) => {
  const today = new Date();

  const utc1 = Date.UTC(
    itemDate.getFullYear(),
    itemDate.getMonth(),
    itemDate.getDate()
  );
  const utc2 = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
};

const ToDoItem = (props) => {
  const removeItemHandler = () => {
    props.onRemove(props.item.id);
  };

  let timeSinceCreated = getDifferenceInDays(props.item.dateCreated);
  if (timeSinceCreated === 0) {
    timeSinceCreated = "Today";
  } else if (timeSinceCreated === 1) {
    timeSinceCreated = "Yesterday";
  }

  return (
    <li title="Click to delete item" onClick={removeItemHandler}>
      <div className={styles.item}>
        <div className={styles["item-side"]}>{props.item.date}</div>
        <hr />
        <div>
          <p>{props.item.title}</p>
        </div>
        <hr />
        <div className={styles["item-side"]}>{`Added: ${timeSinceCreated}`}</div>
      </div>
    </li>
  );
};

export default ToDoItem;
