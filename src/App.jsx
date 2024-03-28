import AppName from "./components/AppName";
import { useState } from "react";
import "./App.css";

import TodoItems from "./components/TodoItems";
import TodoItemAdd from "./components/TodoItemAdd";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";
function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    setTodoItems((curValue) => [
      ...curValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };
  const deleteItem = (itemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== itemName);
    setTodoItems(newTodoItems);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName />
        <TodoItemAdd />
        <WelcomeMessage />

        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
