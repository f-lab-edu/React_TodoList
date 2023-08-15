import { useState } from "react";
import TodoListTitleComponent from "./TodoListTitleComponent";
import TodoListInputComponent from "./TodoListInputComponent";
import TodoListItemComponent from "./TodoListItemComponent";
import "../App.css";

export default function TodoListTemplateComponent() {
  const [todoLists, setTodoLists] = useState([{ todo: "list1" }, { todo: "list2" }, { todo: "list3" }]);

  return (
    <>
      <div className="todo_list_container">
        <TodoListTitleComponent />
        <TodoListInputComponent setTodoLists={setTodoLists} />
        <TodoListItemComponent todoLists={todoLists} />
      </div>
    </>
  );
}
