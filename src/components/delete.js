import { useState } from "react";

function Delete() {
  let [data, setData] = useState(["임시데이터"]);

  return (
    <>
      <div className="wishlist category" style={{ marginTop: "30px" }}>
        <button className="category-plus">+</button>
        <div className="card-container">
          <div className="card-img">
            <img></img>
          </div>
          <div className="card-info">
            <p>제품명 : {data[0]}</p>
            <p>가격 : {data[0]}</p>
            <div className="card-href">
              <button className="blue-button">복구</button>
              <button className="red-button">영구삭제</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Delete;
