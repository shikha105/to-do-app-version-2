import AppName from "./components/AppName";
import "./App.css";

import TodoItems from "./components/TodoItems";
import TodoItemAdd from "./components/TodoItemAdd";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemsContextProvider from "./store/todo-items-store";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <TodoItemAdd />
        <WelcomeMessage />

        <TodoItems />
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
