import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

type TodoListInputProps = {
  setTodoLists: (updater: (prev: { todo: string }[]) => { todo: string }[]) => void;
};

export default function TodoListInputComponent({ setTodoLists }: TodoListInputProps) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue) {
      setTodoLists((prev) => [...prev, { todo: inputValue }]);
      setInputValue("");
      // 왜 클리어가 안될까?
    } else {
      setTodoLists((prev) => [...prev, { todo: "빈 칸" }]);
      setInputValue("");
    }
  };
  return (
    <div className="todo_list_input_wrapper">
      <form className="todo_list_form" action="" onSubmit={handleSubmit}>
        <input className="todo_list_input" type="text" placeholder="오늘의 할 일을 추가해주세요." onChange={handleChange} />
        <button className="search_icon" type="submit">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </form>
    </div>
  );
}
