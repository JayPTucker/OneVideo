import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

import "./Footer.css";

function Footer() {
    return (
        
        <Container fluid className="footer">
            <Row className="justify-content-center text-center">
                <Col>
                    <p>Jay Paul Tucker</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer
