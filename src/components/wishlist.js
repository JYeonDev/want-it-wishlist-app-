import { useState } from "react";
import { useHistory } from "react-router";

function Wishlist() {
  /* let history = useHistory(); */
  let categoryList = [];
  let [categoryOnOff, setCategoryOnOff] = useState(false);
  let [categoryValue, setCategoryValue] = useState("");

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
          <div className="modal-container">
            <div className="modal-header">
              <div>카테고리추가</div>
              <button>x</button>
            </div>
            <form className="modal-text">
              <input
                type="text"
                placeholder="카테고리명을 입력하세요."
                onChange={(e) => {
                  console.log(e.target.value);
                }}
              ></input>
              <button type="submit">추가</button>
            </form>
          </div>
        ) : null}
      </nav>
      <div className="wishlist">구분</div>
    </>
  );
}

export default Wishlist;
