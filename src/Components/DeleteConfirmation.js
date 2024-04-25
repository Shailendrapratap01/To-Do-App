import React from "react";
import { Modal } from "react-bootstrap";

function DeleteConfirmation({
  setDisplayPopup,
  displayPopup,
  deleteTodo,
  todoId,
}) {
  return (
    <Modal show={displayPopup} centered className="px-4">
      <Modal.Title className="px-3 py-2">Delete Confirmation</Modal.Title>
      <Modal.Body className="py-0">
        <div className="alert alert-danger my-0">Are You Sure ?</div>
      </Modal.Body>
      <div className="d-flex justify-content-between px-3 py-1 pt-0">
        <button
          type="button"
          className="btn bg-white text-danger fw-bolder"
          onClick={() => {
            deleteTodo(todoId);
            setDisplayPopup(false);
          }}
        >
          Delete
        </button>
        <button
          type="button"
          className="btn bg-white text-primary"
          onClick={() => {
            setDisplayPopup(false);
          }}
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
}

export default DeleteConfirmation;
