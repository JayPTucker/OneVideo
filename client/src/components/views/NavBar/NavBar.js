import React, { useState } from 'react';
import LeftMenu from './Sections/LeftMenu';
import LoginSection from './Sections/LoginSection';

import { Container, Row, Col } from "react-bootstrap";
import { Drawer, Button, Icon } from 'antd';
// import './Sections/Navbar.css';

function NavBar() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <a className="menu__logo" href="/">OneVideo</a>
        </Col>

        <Col>
          <LeftMenu mode="horizontal" />
        </Col>

        <Col>
          <LoginSection mode="horizontal" />
        </Col>
      </Row>
    </Container>
    // <nav className="menu" style={{ position: 'fixed', zIndex: 5, width: '100%' }}>
    //   <div className="menu__logo">
    //     <a href="/">OneVideo</a>
    //   </div>
    //   <div className="menu__container">
    //     <div className="menu_left">
    //       <LeftMenu mode="horizontal" />
    //     </div>
    //     <div className="menu_rigth">
    //       <LoginSection mode="horizontal" />
    //     </div>
    //     <Button
    //       className="menu__mobile-button"
    //       type="primary"
    //     >
    //       <Icon type="align-right" />
    //     </Button>
    //   </div>
    // </nav>
  )
}

export default NavBar