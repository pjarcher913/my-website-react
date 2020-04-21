import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Dropdown from 'react-bootstrap/Dropdown';
// import NavbarBrand from "react-bootstrap/NavbarBrand";
import Link from 'react-router-dom/Link';
import './styles/NavBar.css';

export const NavigationBar = (props) => (
  <Navbar className="navbar-root" expand="lg">
    <Navbar.Brand className="navbar-name" href="/">Patrick Archer</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="navbar ml-auto">
        {/* === Page links === */}
        <Nav.Item>
          <Nav.Link active="1">
            <Link className="nav-link pl-3" to="/">HOME</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link className="nav-link pl-3" to="/resume">RESUME</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link className="nav-link pl-3" to="/projects">PROJECTS</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link className="nav-link pl-3" to="/contact">CONTACT</Link>
          </Nav.Link>
        </Nav.Item>
        {/* === Dropdown menu === */}
        {/*<Nav.Item>*/}
        {/*  <Dropdown>*/}
        {/*    <Dropdown.Toggle variant="success" id="dropdown-basic">*/}
        {/*      Dropdown*/}
        {/*    </Dropdown.Toggle>*/}
        {/*    <Dropdown.Menu alignRight>*/}
        {/*      <Dropdown.Header>Dropdown header</Dropdown.Header>*/}
        {/*      <Dropdown.Item href="#">Action</Dropdown.Item>*/}
        {/*      <Dropdown.Item href="#">Another action</Dropdown.Item>*/}
        {/*      <Dropdown.Item href="#">Something else</Dropdown.Item>*/}
        {/*    </Dropdown.Menu>*/}
        {/*  </Dropdown>*/}
        {/*</Nav.Item>*/}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
