import { MdOutlineDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

function TodoItem({ todoName, todoDate }) {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            onClick={() => deleteItem(todoName)}
            type="button"
            className="btn btn-danger kg-button"
          >
            <MdOutlineDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
