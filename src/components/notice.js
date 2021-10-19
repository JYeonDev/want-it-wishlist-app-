import { Modal } from "react-bootstrap";
import { useState } from "react";

function Notice() {
  let [modalOpen, setModalOpen] = useState(false);
  let modalClose = () => {
    setModalOpen(true);
  };
  return (
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>공지사항</Modal.Title>
        <button className="close" onClick={modalClose}>
          x
        </button>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>
    </Modal.Dialog>
  );
}

export default Notice;
