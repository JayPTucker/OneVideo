import React, { useState } from 'react';
import LeftMenu from './Sections/LeftMenu';
import LoginSection from './Sections/LoginSection';

import { Container, Row, Col } from "react-bootstrap";

import './Sections/Navbar.css';

function NavBar() {
  return (
    <Container fluid>
      <Row>
        <Col md={4}>
          <a className="logo" href="/">OneVideo</a>
        </Col>

        <Col className="justify-content-center LeftMenu">
          <LeftMenu />
        </Col>

        <Col md={4} className="LoginSection">
          <LoginSection />
        </Col>
      </Row>
    </Container>
  )
}

export default NavBar