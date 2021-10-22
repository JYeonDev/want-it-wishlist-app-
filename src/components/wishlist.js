import { useState } from "react";
import { useHistory } from "react-router";

function Wishlist() {
  /* let history = useHistory(); */
  let [categoryList, setCategoryList] = useState(["+"]);
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
          {categoryList[0]}
        </button>
        {categoryOnOff === true ? (
          <div className="modal-container">
            <div className="modal-header">
              <div>카테고리추가</div>
              <button onClick={onOff}>x</button>
            </div>
            <div className="modal-text">
              <input
                type="text"
                placeholder="카테고리명을 입력하세요."
                onChange={(e) => {
                  setCategoryValue(e.target.value);
                }}
              ></input>
              <button
                onClick={() => {
                  let categoryListCopy = [...categoryList];
                  categoryListCopy.push(categoryValue);
                  setCategoryList(categoryListCopy);
                }}
              >
                추가
              </button>
            </div>
          </div>
        ) : null}
      </nav>
      <div className="wishlist">구분</div>
    </>
  );
}

export default Wishlist;
