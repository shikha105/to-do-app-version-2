import AppName from "./components/AppName";
import { useState } from "react";
import "./App.css";

import TodoItems from "./components/TodoItems";
import TodoItemAdd from "./components/TodoItemAdd";
import WelcomeMessage from "./components/WelcomeMessage";
function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New item added ${itemName} Date: ${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };
  const handleDeleteItem = (itemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== itemName);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <TodoItemAdd onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}

      <TodoItems onDeleteItem={handleDeleteItem} todoItems={todoItems} />
    </center>
  );
}

export default App;
