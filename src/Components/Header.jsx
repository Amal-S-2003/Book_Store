import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src=""
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Book Store
          </Navbar.Brand>
            <div className="btns">

          <Link className="btn btn-danger" to={'/add'}>Add</Link>
          <Link className="btn btn-danger" to={'/list'}>Book List</Link>
          <Link className="btn btn-danger" to={'/'}>back</Link>
            </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
