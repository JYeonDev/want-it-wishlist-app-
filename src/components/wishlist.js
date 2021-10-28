import { useState } from "react";

function Wishlist() {
  /* let history = useHistory(); */
  let [categoryList, setCategoryList] = useState([]);
  let [categoryOnOff, setCategoryOnOff] = useState(false);
  let [categoryValue, setCategoryValue] = useState("");
  let [data, setData] = useState(["임시데이터"]);

  function onOff() {
    setCategoryOnOff(!categoryOnOff);
  }

  return (
    <div>
      <nav className="category">
        <div style={{ margin: "20px" }}>카테고리</div>
        <div className="category-flex">
          {categoryList.map(function (list, i) {
            console.log(i, categoryList);
            return (
              <div key={i}>
                <button className="category-list">
                  {list}
                  <button className="category-close" style={{ color: "red" }}>
                    x
                  </button>
                </button>
              </div>
            );
          })}
          <button className="category-plus" onClick={onOff}>
            +
          </button>
        </div>
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
      <div className="wishlist category" style={{ marginTop: "30px" }}>
        <button className="category-plus">+</button>
        {1 == 1 ? (
          <div className="card-container">
            <div className="card-img">
              <img></img>
            </div>
            <div className="card-info">
              <p>제품명 : {data[0]}</p>
              <p>가격 : {data[0]}</p>
            </div>
            <div className="card-href">
              <button className="blue-button">이동</button>
              <button className="red-button">삭제</button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Wishlist;
