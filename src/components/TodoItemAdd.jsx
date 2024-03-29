import { useState, useRef } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

function TodoItemAdd() {
  const { addNewItem } = useContext(TodoItemsContext);

  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName, dueDate);
  };

  return (
    <div className="container text-center">
      <form onSubmit={handleAddButtonClicked} className="row kg-row">
        <div className="col-6">
          <input
            ref={todoNameElement}
            type="text"
            placeholder="Enter Item here"
          ></input>
        </div>
        <div className="col-4">
          <input ref={dueDateElement} type="date"></input>
        </div>
        <div className="col-2">
          <button className="btn btn-success kg-button">
            <IoMdAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
}

export default TodoItemAdd;
