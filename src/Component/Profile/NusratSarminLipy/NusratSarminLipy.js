import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img from '../../../img/assets/Teacher Profile/lipi.jpg'
const NusratSarminLipy = () => {
  return (
    <div style={{
        margin: '50px'
    }}>
      <Container>
      <h2 style={{textAlign: 'start'}}>TEACHERS PROFILE</h2>
      <hr/>
     <Row style={{
    
       padding: '10px'
     }}>
   <Col md={6}>
   <h4>Nusrat Sharmin Lipy</h4>
       
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
         }}>Assistant Professor & Chairman</p>
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
         }}>01744998866</p>
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
         }}>nslipy@bu.ac.bd</p>
       </Col>
     </Row>
     <div style={{
       padding: '10px 0'
     }}>
       
       <p style={{textAlign: "start"}}><strong><u>Research Interest</u></strong> Women Entrepreneurship, Human Resource Management & Work life balance etc.</p>
     </div>
     <Row style={{
       textAlign: 'start', 
       background: '#dddddd',
       padding: '10px 0',
       margin: '5px 0'
     }}>
       <h5><u>Publication</u></h5>
       <p>1.EXPLORATORY ANALYSIS OF TOURISTS’ SATISFACTION LEVEL ON TOURISM GOODS AND SERVICES OF KUAKATA AND SUNDARBANS, BANGLADESH. <br/>
2.Examining the Job Satisfaction among the Hotel Employees in
Bangladesh: An Exploratory Study.<br/>
3.CONSUMERS PERCEPTIONS TOWARD ONLINE SHOPPING IN
BANGLADESH: A STUDY BASED ON THE RISK FACTORS.<br/>
4.Examining the Similarities and Differences between Business Entrepreneurship and Social Entrepreneurship: A Comparative Study.</p>
     </Row>
      </Container>
    </div>
  )
}

export default NusratSarminLipy