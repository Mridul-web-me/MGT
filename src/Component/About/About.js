import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import about from '../../img/assets/about.jpg'

const About = () => {
    return (
        <div style={{ margin: '40px 0' }} id='about'>
            <Container>
                <h2>About Management Studies</h2>
                <Row style={{
                    margin: '20px 0'
                }}>
                    <Col xs={6} style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'justify',
                        fontSize: '20px'
                    }}>
                        <p>
                            Management studies department is one of the leading departments of University of Barishal. Management Studies Department started its journey from 2011 as one of the very first departments of the university. It was established in 24th January 2011.
                        </p>
                    </Col>
                    <Col xs={6}>
                        <img src={about} className="img-fluid" alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About