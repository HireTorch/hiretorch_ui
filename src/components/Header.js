import React from "react";
import Container from "react-bootstrap/Container";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";


function Header({ Header_name }) {
  return (
    // <Navbar className="header" bg="primary" variant="dark">
    <Navbar className="header" bg="transparent" variant="light">
      <Container>
        <Navbar.Brand to="#Home">
          <img
            src="./images/hire_torch.png"
            alt=""
            width="60"
            height="70"
          /> <b> HireTorch</b>
        </Navbar.Brand>


        <Nav className="me-left">
          <Nav.Link tag="h1" as ={Link} to ="/home" action>
            Home
          </Nav.Link>
          <Nav.Link tag="a1" as ={Link} to ="/about" action>
            About
          </Nav.Link>
          <Nav.Link tag="a3" as ={Link} to ="/registration" action>
            Sign Up
          </Nav.Link>
          {/* <Nav.Link tag="a4" href="/companies" action>Companies</Nav.Link> */}

          <NavDropdown
            title="Login"
            id="basic-nav-dropdown"
            className="login ml-4"
          >
            <NavDropdown.Item tag="sl" as ={Link} to="/student-Login" action >
              Candidate Login
            </NavDropdown.Item>
            {/* <NavDropdown.Item tag="il" as ={Link} to="/institute-Login" action>
              Institute Login
            </NavDropdown.Item> */}
            <NavDropdown.Item tag="cl" as ={Link} to="/company-Login" action>
              Company Login
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item tag="al" as ={Link} to="/admin-Login" action>
              Admin Login
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
   
      </Container>
  
    </Navbar>
    
    
  );
}

export default Header;
