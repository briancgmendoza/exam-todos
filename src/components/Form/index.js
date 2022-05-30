import * as React from "react";

import { useInputValue } from "../../hooks/use-input-value";
import styles from "../../styles/form.module.scss";

const Form = ({ onSubmit, handleClear }) => {
  const { resetValue, ...todosInput } = useInputValue("");
  todosInput.name = "todosInput";
  todosInput.placeholder = "Enter your Todos";

  return (
    <>
      <form
        className={styles["form-group"]}
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(todosInput.value);
          resetValue();
        }}
      >
        <input className={styles["form-input"]} {...todosInput} required />
        <button type="submit" className={styles["btn-save-todo"]}>
          Save
        </button>
      </form>

      <div className={styles["btn-container"]}>
        <button
          onClick={() => {
            let proceed = confirm("Are you sure you want to delete all todos?");
            if (!proceed) return;
            handleClear();
          }}
          className={styles["btn-clear-all"]}
        >
          Clear all todos
        </button>
      </div>
    </>
  );
};

export default Form;
