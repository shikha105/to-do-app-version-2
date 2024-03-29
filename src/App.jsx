import AppName from "./components/AppName";
import { useState, useReducer } from "react";
import "./App.css";

import TodoItems from "./components/TodoItems";
import TodoItemAdd from "./components/TodoItemAdd";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";

const todoItemsReducer = (curTodoItems, action) => {
  let newTodoItems = curTodoItems;

  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...curTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = curTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newTodoItems;
};

function App() {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: { itemName, itemDueDate },
    };

    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (itemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: { itemName },
    };

    dispatchTodoItems(deleteItemAction);
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
