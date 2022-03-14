import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Helmet from 'react-helmet'
import img from '../../../img/assets/Teacher Profile/abir.jpg'

const MdAbirHossain = () => {
  return (
    <div style={{
      margin: '50px'
  }}>
     <Helmet>
             
             <title>MD. ABIR HOSSAIN</title>
         </Helmet>
    <Container>
    <h2 style={{textAlign: 'start'}}>TEACHERS PROFILE</h2>
    <hr/>
   <Row style={{
     padding: '10px'
   }}>
  <Col md={6}>
  <h4>MD. ABIR HOSSAIN</h4>
     
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
       }}>+8801722504414       </p>
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
       }}>mahossain@bu.ac.bd</p>
     </Col>
   </Row>
   <div style={{
     padding: '10px 0',
     textAlign: 'start'
   }}>
     
     <p style={{textAlign: "start"}}><u>Research Interest</u></p>
     <p>Industrial Relations, Organizational Behavior, Human Resource Management, Agribusiness, Tourism and Hospitality Management.</p>
   </div>
   <Row style={{
     textAlign: 'start', 
     background: '#dddddd',
     padding: '10px 0',
     margin: '5px 0'
   }}>
     <h5><u>Publication</u></h5>
     <p><strong>Published Articles:</strong> <br/>

1.    “Peoples’ Perception towards Telemedicine: A Case Study on Rural Area of Bangladesh” <br/>
Tazizur Rahman*      Md. Abir Hossain <br/>
Department of Management Studies, University of Barisal, Kornokathi,(Dhaka - Patuakhali Hwy), Barisal-8200, Bangladesh <br/>
Publisher: Information and Knowledge Management ISSN 2224-5758 (Paper) ISSN 2224-896X (Online) Vol.6, No.4, 2016
<br/> <br/>
2.    “Work Stress on Organizational Commitment & Job Performance: The Case of Selected Commercial Banks in Bangladesh” <br/>
Md. Abir Hossain <br/>
Department of Management Studies, University of Barisal, Barisal-8200, Bangladesh <br/>
Publisher: B.U. Journal of Business Studies, Volune 4, Issue II, December 2017
<br/> <br/>
3.    “The Empirical Evidences of Job Turnover in Bangladesh Perspective” <br/>
Md. Jahangir Alam, Mehedi Hasan, Md. Abir Hossain <br/>
Department of Management, BUBT, Mirpur 1, Dhaka <br/>
Publisher: Barisal University Journal 1: 139-145, 2014, ISSN 2411-247X
<br/> <br/>
4.    “The Impact of Sound Industrial Relations on Job Satisfaction: A Case of Different Manufacturing Industries in Bangladesh” <br/>
Md. Abir Hossain*    Tazizur Rahman <br/>
Department of Management Studies, University of Barisal, Barisal-8200, Bangladesh <br/>
Publisher: European Journal of Business and Management ISSN 2222-1905 (Paper) ISSN 2222-2839 (Online) Vol.8, No.11, 2016</p>
   </Row>
    </Container>
  </div>
  )
}

export default MdAbirHossain