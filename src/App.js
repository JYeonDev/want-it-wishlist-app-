import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { connect } from "react-redux";
import Wishlist from "./components/wishlist";
import Delete from "./components/delete";
import Notice from "./components/notice";
import Login from "./components/login";
import SignUp from "./components/signup";
import Welcome from "./components/welcome";
import { useEffect, useState } from "react";

function App() {
  let [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="Navbar">
            <Link to="/" style={{ textDecoration: "none", color: "skyblue" }}>
              WANTIT
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/wishlist">Wishlist</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/delete">Delete</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/login">Login</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Route exact path="/">
        {show === false ? <Notice /> : null}
      </Route>

      <Route path="/wishlist">
        <Wishlist />
      </Route>

      <Route path="/delete">
        <Delete />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/welcome">
        <Welcome />
      </Route>
    </div>
  );
}

function test(state) {
  return {
    first: state[0].number,
  };
}

export default connect(test)(App);
// export default App;
