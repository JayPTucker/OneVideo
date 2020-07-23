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
        <video src="https://s3.us-east-2.amazonaws.com/jpt-onevideo.com/uploads%5C1595494342909_2020-07-09+18-23-25.mp4" width="1020" height="580"></video>
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