import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NotFound from './NotFound';
import {Route, Routes} from 'react-router-dom';
import ContentWrapper from './ContentWrapper';

function NavBar() {
  return (
    <>
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/" className='navbar-dark'>ER A° I°</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className='navbar-dark' />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 navbar-dark"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Quienes Somos</Nav.Link>
            <NavDropdown title="Qué Hacemos" id="navbarScrollingDropdown">
            <NavDropdown.Item href="/QueHacemos">
                Ver Todo
              </NavDropdown.Item>
              <NavDropdown.Item href="/Asadores">
                Asadores
              </NavDropdown.Item>
              <NavDropdown.Item href="/Barandas">
                Barandas
              </NavDropdown.Item>
              <NavDropdown.Item href="/Escaleras">
                Escaleras
              </NavDropdown.Item>
              <NavDropdown.Item href="/Puertas">
                Puertas
              </NavDropdown.Item>
              <NavDropdown.Item href="/Bodegas">
                Bodegas
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Mesas y +">
                Mesas y +
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="mailTo:estebanreal72@gmail.com" >
              Contacto
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>
      <Route exact path='/' element={<ContentWrapper />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    </>
  );
}

export default NavBar;