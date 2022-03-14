import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Helmet from 'react-helmet'
import img from '../../../img/assets/Teacher Profile/liza.jpg'

const SaimaAfrinLiza = () => {
  return (
    <div style={{
      margin: '50px'
  }}>
     <Helmet>
             
             <title>Saima Afrin Liza</title>
         </Helmet>
    <Container>
    <h2 style={{textAlign: 'start'}}>TEACHERS PROFILE</h2>
    <hr/>
   <Row style={{
    
     padding: '10px'
   }}>
   <Col md={6}>
   <h4>Saima Afrin Liza</h4>
     
   </Col>
   <Col md={6}>
   <img src={img} alt="" width="100px"/>
   </Col>
     </Row>
   <Row style={{
     textAlign: 'start',
     background: '#dddddd',
     margin: '5px 0',
     padding: '10px 0'
   }}>
     <Col md={6}>
       <h5 style={{
         margin: '0px'
       }}>Designation</h5>
     </Col>
     <Col md={6}>
       <p style={{
         margin: '0px'
       }}>Lecturer</p>
     </Col>
   </Row>
   <Row style={{
     textAlign: 'start',
     margin: '5px 0',
     padding: '10px 0'
   }}>
     <Col md={6}>
       <h5 style={{
         margin: '0px'
       }}>Department</h5>
     </Col>
     <Col md={6}>
       <p style={{
         margin: '0px'
       }}>Management Studies</p>
     </Col>
   </Row>
   <Row style={{
     textAlign: 'start',
     margin: '5px 0',
     background: '#dddddd',
     margin: '5px 0',
     padding: '10px 0'
   }}>
     <Col md={6}>
       <h5 style={{
         margin: '0px'
       }}>Highest Education Level</h5>
     </Col>
     <Col md={6}>
       <p style={{
         margin: '0px'
       }}>MBA</p>
     </Col>
   </Row>
   <Row style={{
     textAlign: 'start',
     margin: '5px 0',
     padding: '10px 0'
   }}>
     <Col md={6}>
       <h5 style={{
         margin: '0px'
       }}>Cell No.</h5>
     </Col>
     <Col md={6}>
       <p style={{
         margin: '0px'
       }}>01634116076      </p>
     </Col>
   </Row>
   <Row style={{
     textAlign: 'start',
     background: '#dddddd',
     margin: '5px 0',
     padding: '10px 0'
   }}>
     <Col md={6}>
       <h5 style={{
         margin: '0px'
       }}>Email</h5>
     </Col>
     <Col md={6}>
       <p style={{
         margin: '0px'
       }}>	afrinliza1991@gmail.com</p>
     </Col>
   </Row>
   <div style={{
     padding: '10px 0',
     textAlign: 'start'
   }}>
     
     <p style={{textAlign: "start"}}><u>Research Interest</u></p>
     
   </div>
   <Row style={{
     textAlign: 'start', 
     background: '#dddddd',
     padding: '10px 0',
     margin: '5px 0'
   }}>
     <h5><u>Publication</u></h5>
    
   </Row>
   <Row style={{
     textAlign: 'start', 
     padding: '10px 0',
     margin: '5px 0'
   }}>
     <h5><u>Other Information</u></h5>
    
   </Row>

    </Container>
  </div>
  )
}

export default SaimaAfrinLiza