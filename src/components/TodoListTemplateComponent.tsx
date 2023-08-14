import TodoListTitleComponent from "./TodoListTitleComponent";
import TodoListInputComponent from "./TodoListInputComponent";
import TodoListItemComponent from "./TodoListItemComponent";
import "../App.css";

export default function TodoListTemplateComponent() {
  return (
    <>
      <div className="todo_list_container">
        <TodoListTitleComponent />
        <TodoListInputComponent />
        <TodoListItemComponent />
      </div>
    </>
  );
}
