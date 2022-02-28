import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Cerveza TBC</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Cervezas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Rubias</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Rojas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Negras</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Lupuladas</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Conocenos</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
