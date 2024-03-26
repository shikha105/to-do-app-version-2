import AppName from "./components/AppName";

import "./App.css";

import TodoItems from "./components/TodoItems";
import TodoItemAdd from "./components/TodoItemAdd";
function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/23",
    },
    {
      name: "Go to College",
      dueDate: "4/10/23",
    },
    {
      name: "Make a video",
      dueDate: "4/10/23",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <TodoItemAdd />
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;
