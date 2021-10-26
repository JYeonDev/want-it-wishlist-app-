import { Modal } from "react-bootstrap";
import { useState } from "react";

function Notice() {
  let [modalOpen, setModalOpen] = useState(false);

  let modalClose = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      {modalOpen === false ? (
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>공지사항</Modal.Title>
            <button className="close" onClick={modalClose}>
              x
            </button>
          </Modal.Header>

          <Modal.Body>
            <p>Wish List App WantIt이 오픈하였습니다.</p>
          </Modal.Body>
        </Modal.Dialog>
      ) : null}
    </>
  );
}

export default Notice;
