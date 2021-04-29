import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo container"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button
          className="btn btn-success btn-md m-1"
          onClick={() => completeTodo(index)}
        >
          Complete
        </button>
        <button
          className="btn btn-danger btn-md m-1"
          onClick={() => removeTodo(index)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <h3 className="m-1">Add a New Task: </h3>
        <input
          type="text"
          className="input "
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="btn btn-primary m-1">Add Now</button>
      </div>
      <hr />
    </form>
  );
}

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "Eat some pizza",
      isCompleted: false,
    },
    {
      text: "Meet a friend for lunch",
      isCompleted: false,
    },
    {
      text: "Build a really cool todo app using react",
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app container">
      <h2 style={{ "text-align": "center" }}>Time and tide wait for no man.</h2>
      <br />
      <TodoForm addTodo={addTodo} />
      <h3> Existing Tasks: </h3>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
