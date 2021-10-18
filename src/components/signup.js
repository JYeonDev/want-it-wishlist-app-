import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <Form className="login-form">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="sign">회원가입</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="tel" placeholder="Phone number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="Adress" />
      </Form.Group>

      <Button variant="primary" type="submit" className="login">
        <Link to="/welcome">가입하기</Link>
      </Button>
    </Form>
  );
}

export default SignUp;
