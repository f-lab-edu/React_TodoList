import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

type TodoItem = {
  todo: string;
};

interface TodoListProps {
  todoLists: TodoItem[];
}

export default function TodoListItemComponent({ todoLists }: TodoListProps) {
  const [amendTodoList, setamendTodoList] = useState<number | null>(null);
  const [amendValue, setAmendValue] = useState("");

  const handleEditClick = (index: number) => {
    setAmendValue(todoLists[index].todo);
    setamendTodoList(index);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmendValue(e.target.value);
  };

  return (
    <div className="todo_list_item_wrapper">
      {todoLists.map((todoItem, i) => (
        <div className="todo_list_items" key={i}>
          <div className="todo_list_items_checkbox"></div>

          {amendTodoList === i ? <input value={amendValue} onChange={handleInputChange} autoFocus /> : <div className="todo_list_items_textbox">{todoItem.todo}</div>}

          <div className="amend_list_items" onClick={() => handleEditClick(i)}>
            <FontAwesomeIcon icon={faPen} />
          </div>
        </div>
      ))}
    </div>
  );
}
