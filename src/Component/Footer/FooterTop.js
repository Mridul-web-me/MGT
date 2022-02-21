import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import footer from '../../img/assets/footer.jpg'

const FooterTop = () => {
  return (
    <div style={{
      background: '#040a1a'
    }}>
      <Container>
        <Row style={{
          color: '#fff'
        }}>
          <Col md={6}>
            <h3>Contact Us</h3>
            <hr />
            <p style={{ textAlign: 'start' }}>Kornokathi, Dhaka - Patuakhali Hwy, <br /> Barisal 8200, Barisal, Barisal Division, Bangladesh
              <br />
              <i class="fas fa-phone"></i> Phone: <br />
              <i class="fas fa-fax"></i> Fax: <br />
              <i class="fas fa-envelope"></i> E-mail: <br />
              Web: </p>
          </Col>
          <Col md={6}>
            <h3>Facebook</h3>
            <hr />
            <a href="https://www.facebook.com/mgt242011" target='_blank' style={{ textDecoration: 'none' }}>
              <img src={footer} alt="" style={{ opacity: '50%' }} className="img-fluid" />
              <p style={{
                position: 'relative',
                bottom: '45%',
                left: '15%',
                textAlign: 'justify',
                fontSize: '1.5vw',
                color: '#fff',
                width: '60%',

              }}> Department of Management Studies, <br />
                University of Barishal</p>
            </a>

          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterTop