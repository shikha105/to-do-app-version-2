import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems, onDeleteItem }) => {
  return (
    <>
      <div className={styles.itemContainer}>
        {todoItems.map((item) => (
          <TodoItem
            onDeleteItem={onDeleteItem}
            todoName={item.name}
            todoDate={item.dueDate}
          />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
