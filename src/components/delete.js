import { useState } from "react";

function Delete() {
  let [data, setData] = useState(["임시데이터"]);
  let [repair, setRepair] = useState(false);

  function rep() {
    setRepair(true);
  }

  return (
    <>
      <div className="wishlist category" style={{ marginTop: "30px" }}>
        <div className="card-container">
          <div className="card-img">
            <img></img>
          </div>
          <div className="card-info">
            <p>제품명 : {data[0]}</p>
            <p>가격 : {data[0]}</p>
            <div className="card-href">
              <button className="blue-button" onClick={rep}>
                복구
              </button>
              <button className="red-button">영구삭제</button>
              {repair === true ? <div>처리 예정</div> : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Delete;
