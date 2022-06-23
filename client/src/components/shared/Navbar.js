//import {Container, Navbar, Nav} from 'react-bootstrap/*';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import {LinkContainer} from 'react-router-bootstrap'
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { nav } from "react-bootstrap";
import { Button } from "react-bootstrap";

const NavBar = () => (
  <>

    <Navbar expand="lg" bg="dark" variant="dark" fixed="top" >
      <Container>
        <LinkContainer to="/">
        <Navbar.Brand><span style={{fontWeight:900 }}> Han</span>dyman</Navbar.Brand>
      </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
          <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
           </LinkContainer>
           <LinkContainer to="/Team">
              <Nav.Link>Team</Nav.Link>
           </LinkContainer>
           <LinkContainer to="/Workers">
              <Nav.Link>Workers</Nav.Link>
           </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
);

export default NavBar;
