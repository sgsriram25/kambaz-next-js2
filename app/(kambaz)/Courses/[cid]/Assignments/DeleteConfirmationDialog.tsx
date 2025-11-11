"use client";

import { Modal, Button } from "react-bootstrap";

interface DeleteConfirmationDialogProps {
  show: boolean;
  handleClose: () => void;
  assignmentTitle: string;
  onConfirm: () => void;
}

export default function DeleteConfirmationDialog({
  show,
  handleClose,
  assignmentTitle,
  onConfirm,
}: DeleteConfirmationDialogProps) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Deletion</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        Are you sure you want to delete <strong>{assignmentTitle}</strong>?
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            onConfirm();
            handleClose(); 
          }}
        >
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
