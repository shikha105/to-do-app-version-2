import AppName from "./components/AppName";
import { useState } from "react";
import "./App.css";

import TodoItems from "./components/TodoItems";
import TodoItemAdd from "./components/TodoItemAdd";
function App() {
  const initialTodoItems = [
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
  let [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New item added ${itemName} Date: ${itemDueDate}`);
  };

  return (
    <center className="todo-container">
      <AppName />
      <TodoItemAdd onNewItem={handleNewItem} />
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;
