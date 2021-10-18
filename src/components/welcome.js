import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome-text">가입을 환영합니다.</div>
      <Button variant="primary" type="submit" className="login">
        <Link to="/">메인페이지 이동</Link>
      </Button>
    </div>
  );
}

export default Welcome;
