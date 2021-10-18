import { Modal } from "react-bootstrap";

function Notice() {
  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>공지사항</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>
    </Modal.Dialog>
  );
}

export default Notice;
