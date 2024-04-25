import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import "../App.css";

function Todo({
  todo,
  setEditTodo,
  setTodoId,
  setinputText,
  handleCompleteTag,
  setDisplayPopup,
  setCreateTodoPopup,
  setDateTimeInput,
}) {
  const [date, time] = todo.time.split("T");
  return (
    <li className="d-flex justify-content-between align-items-center p-2 border-bottom">
      <div className="d-flex justify-content-center align-items-center gap-2">
        <input
          role="button"
          type="checkBox"
          className="fs-5"
          onChange={() => {
            handleCompleteTag(todo.id);
          }}
        ></input>
        <div className="d-flex flex-column justify-content-center align-items-start">
          <p className="mb-0 fs-5"> {todo.text} </p>
          <p className="mb-0 fs-7 text-secondary fw-light">
            {" "}
            {`${date} ${time}`}{" "}
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-center gap-2 align-items-center">
        <MdDeleteOutline
          role="button"
          className="fs-5"
          onClick={() => {
            setTodoId(todo.id);
            setDisplayPopup(true);
          }}
        />
        <FaRegEdit
          role="button"
          className="fs-5"
          onClick={() => {
            setTodoId(todo.id);
            setEditTodo(true);
            setinputText(todo.text);
            setCreateTodoPopup(true);
            setDateTimeInput(todo.time);
          }}
        />
        <div
          className={`${
            todo.showCompletedBadge ? "bg-success" : "bg-danger"
          } rounded-circle hnw`}
        ></div>
      </div>
    </li>
  );
}

export default Todo;
