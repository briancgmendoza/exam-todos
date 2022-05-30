import * as React from "react";

import styles from "./styles/app.module.scss";
import Form from "./components/Form";
import Todo from "./components/Todo";

const app = () => {
  const [todos, setTodos] = React.useState([]);

  const toggleDone = (idx) =>
    setTodos(
      todos.map((todo, i) =>
        i === idx
          ? {
              ...todo,
              done: true,
            }
          : todo
      )
    );

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Todo List</h1>
      <Form
        onSubmit={(todosInput) =>
          setTodos([{ todosInput, done: false }, ...todos])
        }
        handleClear={() => setTodos([])}
      />
      <Todo todos={todos} toggleDone={toggleDone} />
    </section>
  );
};

export default app;
