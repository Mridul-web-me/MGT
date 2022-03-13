import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img from '../../../img/assets/Teacher Profile/519779.jpg'

const TazizurRahman = () => {
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
 <h4>Tazizur Rahman</h4>
     
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
       }}>Assistant Professor</p>
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
       }}>MBA (Management Information Systems)</p>
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
       }}>+8801710407384       </p>
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
       }}>trahman@bu.ac.bd</p>
     </Col>
   </Row>
   <div style={{
     padding: '10px 0',
     textAlign: 'start'
   }}>
     
     <p style={{textAlign: "start"}}><u>Research Interest</u></p>
     <p>Social Network Analysis, E-Commerce, E-Business,Social Commerce, Online Community Behavior Analysis, New Technology Adoption,Technology & Human Interaction, Business Intelligence, Natural Language Processing(NLP) & Text Analytics, Big Data Analytics,Conventional Machine learning, Deep Learning.</p>
   </div>
   <Row style={{
     textAlign: 'start', 
     background: '#dddddd',
     padding: '10px 0',
     margin: '5px 0'
   }}>
     <h5><u>Publication</u></h5>
     <p><strong>Published Articles:</strong> <br/>
     Consumer Preferences Toward Online Shopping: An Empirical Study on Urban Areas
Md. Shamim Talukder, Tazizur Rahman,Barisal University Journal 1 1 (1), 117-128
<br/>
<br/>
Peoples’ Perception towards Telemedicine: A Case Study on Rural Area of Bangladesh
Tazizur Rahman, Abir Hossain, Information and Knowledge Management. ISSN, 2224-5758
<br/>
<br/>
The impact of sound industrial relations on job satisfaction: A case of different manufacturing industries in Bangladesh
Abir Hossain, Tazizur Rahman, European Journal of Business and Management 8 (11), 1-5
<br/>
<br/>
ATTITUDE OF CONSUMERS TOWARDS CREDIT CARD BRANDS IN BANGLADESH
Tazizur Rahman, Barisal University Journal Part lll 4, 73-85</p>
   </Row>
    </Container>
  </div>
  )
}

export default TazizurRahman