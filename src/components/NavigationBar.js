import React from 'react';
import { Nav, Navbar, Form, FormControl, InputGroup } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../assets/QapaqLogo.png';
// get our fontawesome imports
import { faComments, faCartPlus, faClipboard, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Styles = styled.div`
  .navbar { background-color: #810; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #FFFFFF;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }

  .text-rounded {
    border-radius: 50px;
  }

  .comment-icon {
    margin-left: 22px;
    width: 25px;
    height: 25px;
  }
`;
export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <img src={ logo } />
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Form className="form-center">
      <InputGroup>
          <InputGroup.Prepend>
              <InputGroup.Text>
                  <FontAwesomeIcon icon={faSearch} className="text-rounded" />
              </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl type="text" placeholder="Search" className="text-rounded" />
      </InputGroup>
      </Form>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
              <FontAwesomeIcon className="comment-icon" icon={faComments} />
              <Nav.Link href="/">Mensajes</Nav.Link>
          </Nav.Item> 
          <Nav.Item>
              <FontAwesomeIcon className="comment-icon" icon={faClipboard} />
              <Nav.Link href="/ordenes">Órdenes</Nav.Link>
          </Nav.Item>
          <Nav.Item>
              <FontAwesomeIcon className="comment-icon" icon={faCartPlus} />
              <Nav.Link href="/carrito">Carrito</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)