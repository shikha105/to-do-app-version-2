function TodoItemAdd({ onNewItem }) {
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Enter todo here"></input>
        </div>
        <div className="col-4">
          <input type="date"></input>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={() => onNewItem("a", "12344")}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItemAdd;
