import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

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
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
