import React from "react";
import Container from "react-bootstrap/Container";
import { Button, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";


function ProfileNavBar({ Header_name }) {
  return (
    <Navbar className="header" bg="primary" variant="dark">
    {/* <Navbar className="header" bg="transparent" variant="light"> */}
      <Container>
        <Navbar.Brand to="#Home">
          <img
            src="./images/hire_torch.png"
            alt=""
            width="60"
            height="70"
          /> <b> HireTorch </b>
        </Navbar.Brand>
            <b><i>A Good Life Begins With A Good Company </i></b>
        <Nav className="me-left">
          <Nav.Link tag="h1" as ={Link} to ="/home" action>
            Log Out
          </Nav.Link>
        </Nav>
      </Container>
  
    </Navbar>
    
    
  );
}

export default ProfileNavBar;
