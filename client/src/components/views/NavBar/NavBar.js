import React from 'react';
import LeftMenu from './Sections/LeftMenu';
import LoginSection from './Sections/LoginSection';

import bootstrap from 'bootstrap';
import { Container, Row, Col } from "react-bootstrap";

import './Sections/Navbar.css';

function NavBar() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <a className="logo" href="/">OneVideo</a>
        </Col>

        <Col className="justify-content-center LeftMenu">
          <LeftMenu />
          <button type="button" class="btn btn-success">Success</button>
        </Col>

        <Col className="LoginSection">
          <LoginSection />
        </Col>
      </Row>
    </Container>
  )
}

export default NavBar