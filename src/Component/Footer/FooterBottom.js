import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const FooterBottom = () => {
    return (
        <div style={{ background: '#606060' }}>
            <Container style={{ padding: '20px' }}>
                <Row>
                    <Col md={6}>
                        <p style={{ color: '#fff' }}>©2022 Management Studies - University Of Barishal</p>
                    </Col>
                    <Col md={6}>
                        <p style={{ color: '#fff' }}>Created By <a style={{ color: '#fff' }} href="https://mridul-web.netlify.app/">Mridul</a></p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FooterBottom