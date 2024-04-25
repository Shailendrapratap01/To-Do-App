import moment from "moment";
import React from "react";
import { Modal } from "react-bootstrap";

function Create({
  handleSubmit,
  setinputText,
  inputText,
  setCreateTodoPopup,
  createTodoPopup,
  inputError,
  setInputError,
  setDateTimeInput,
  dateTimeInput,
  setDateInputError,
  dateInputError,
  setValidation,
}) {
  const dateValidation = (value) => {
    console.log(value);
    console.log(moment().format("YYYY-MM-DD HH:mm"));
    const valid = moment(moment().format("YYYY-MM-DD HH:mm")).isBefore(value);
    setValidation(valid);
    console.log(valid);
  };

  return (
    <Modal show={createTodoPopup} centered className="px-3">
      <Modal.Title className="px-3 py-2">Add Todo</Modal.Title>
      <Modal.Body className="py-0">
        <textarea
          type="text"
          className={`w-100 height rounded border ${
            inputError ? "border-danger" : ""
          }`}
          onChange={(e) => {
            setinputText(e.target.value);
            setInputError(false);
          }}
          value={inputText}
        />
        <input
          type="datetime-local"
          className={`w-100 p-2 rounded border ${
            dateInputError ? "border-danger" : ""
          }`}
          value={dateTimeInput}
          min={dateTimeInput}
          onChange={(e) => {
            setDateTimeInput(e.target.value);
            dateValidation(e.target.value);
            setDateInputError(false);
          }}
        />
      </Modal.Body>
      <div className="d-flex justify-content-between px-3 py-1 pb-2">
        <button
          type="button"
          className="btn bg-white text-primary fw-bolder"
          onClick={() => {
            handleSubmit(inputText);
          }}
        >
          Add
        </button>
        <button
          type="button"
          className="btn bg-white text-primary"
          onClick={() => {
            setDateInputError(false);
            setCreateTodoPopup(false);
            setinputText("");
          }}
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
}

export default Create;
