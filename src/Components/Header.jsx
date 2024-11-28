import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold">
            <img
              alt=""
              src="https://img.freepik.com/free-vector/stack-colorful-books_74855-314.jpg?t=st=1732819017~exp=1732822617~hmac=5370e0271c8b1fe0715a69d7af367a72f63caba2a384eb97cf2120bcd49bc0d0&w=740"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{" "}
            Book Store
          </Navbar.Brand>
            <div className="btns d-flex gap-3">

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
