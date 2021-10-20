import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useHistory } from "react-router";

function Wishlist() {
  /* let history = useHistory(); */
  let categoryList = [];
  let [categoryOnOff, setCategoryOnOff] = useState(false);

  function onOff() {
    setCategoryOnOff(!categoryOnOff);
  }

  return (
    <>
      <nav className="category">
        <div style={{ margin: "20px" }}>카테고리</div>
        <button className="category-plus" onClick={onOff}>
          +
        </button>
        {categoryOnOff === true ? (
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary">Close</Button>
              <Button variant="primary">Save changes</Button>
            </Modal.Footer>
          </Modal.Dialog>
        ) : null}
      </nav>
      <div className="wishlist">구분</div>
    </>
  );
}

export default Wishlist;
