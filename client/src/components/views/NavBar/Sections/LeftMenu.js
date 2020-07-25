import React from 'react';
import { Row, Col } from "react-bootstrap";

import "./LeftMenu.css";

function LeftMenu(props) {
  return (
    <Row>
      <Col>
        <a className="quickLink" href="/">Home</a>
      </Col>
      <Col>
        <a className="quickLink" href="/video/upload">Upload</a>
      </Col>
      <Col>
        <a className="quickLink" href="/subscription">Subscriptions</a>
      </Col>
    </Row>
  )
}

export default LeftMenu