import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'; 

function AppNavbar() {
  const navigate = useNavigate();
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Welcome to Navbar</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <h1>Here ARE TWO OPTIONS LOGIN AND SIGNUP</h1>
          <Link to="/login">
            <Button variant="outline-primary" className="mx-2">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button variant="outline-success" className="mx-2">
              Signup
            </Button>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AppNavbar;
