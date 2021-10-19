import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Login() {
  return (
    <Form className="login-form">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3 id-save" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="아이디저장" />
      </Form.Group>
      <Button variant="primary" type="button" className="login">
        <Link to="/">로그인</Link>
      </Button>
      <Button
        variant="primary"
        type="button"
        style={{ marginLeft: "10px" }}
        className="login"
      >
        <Link to="/signup">회원가입</Link>
      </Button>
    </Form>
  );
}

export default Login;
