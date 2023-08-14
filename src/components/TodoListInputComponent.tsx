import React from "react";

export default function TodoListInputComponent() {
  return (
    <div className="todo_list_input_wrapper">
      <form className="todo_list_form" action="">
        <input className="todo_list_input" type="text" placeholder="오늘의 할 일을 추가해주세요." />
      </form>
    </div>
  );
}
