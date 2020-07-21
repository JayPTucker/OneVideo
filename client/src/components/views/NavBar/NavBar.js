import React from 'react';
import LeftMenu from './Sections/LeftMenu';
import LoginSection from './Sections/LoginSection';

import { Row, Col } from "react-bootstrap";

import './Sections/Navbar.css';

function NavBar() {
  return (
    <Row className="NavBarRow text-center">
      <Col>
        <a className="logo" href="/">OneVideo</a>
      </Col>

      <Col className="LeftMenu">
        <LeftMenu />
      </Col>

      <Col className="LoginSection">
        <LoginSection />
      </Col>
    </Row>
  )
}

export default NavBar