import React from "react";
import { Modal } from "react-bootstrap";

function Create({ handleSubmit, setinputText, inputText, setCreateTodoPopup, createTodoPopup,inputError, setInputError }) {
  return (
    <Modal show={createTodoPopup} centered className="px-4">
      <Modal.Title className="px-3 py-2">Add Todo</Modal.Title>
      <Modal.Body className="py-0">
        <textarea
          type="text"
          className={`w-100 height rounded border ${inputError ? "border-danger" : ""} input-lg`}
          onChange={(e) => {
            setinputText(e.target.value);
            setInputError(false);
          }}
          value={inputText}
        />
      </Modal.Body>
      <div className="d-flex justify-content-between px-3 py-1">
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
