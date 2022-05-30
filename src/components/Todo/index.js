import React from "react";

import styles from "../../styles/todo.module.scss";
import classNames from "classnames";

const Todo = ({ todos, toggleDone }) => {
  return (
    <>
      {todos.map(({ todosInput, done }, idx) => {
        return (
          <ul key={idx}>
            <li
              onClick={() => toggleDone(idx)}
              className={classNames({
                [styles["todo-list"]]: true,
                [styles["is-done-task"]]: done,
              })}
            >
              {todosInput}
            </li>
          </ul>
        );
      })}
    </>
  );
};

export default Todo;
