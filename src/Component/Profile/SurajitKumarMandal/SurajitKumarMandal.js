import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img from '../../../img/assets/Teacher Profile/surajit.jpg'

const SurajitKumarMandal = () => {
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
   <h4>Surajit Kumar Mondal</h4>
     
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
       }}>01747399170      </p>
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
       }}>	surajitbumgt@gmail.com</p>
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
     <p><strong>Published Articles:</strong> <br/>
     <p>1. Effect of Modern Technological Tools on Business Students' Academic Performance: Evidence from Public Universities in Bangladesh <br/>
2. A Study on Graduate's Perception on Factors that Influencing Career Choices on Ready Made Garments Sector in Bangladesh.<br/>
3. Application of Linear Programming Approaches for Determining Optimum Production Cost.</p></p>
   </Row>
   <Row style={{
     textAlign: 'start', 
     padding: '10px 0',
     margin: '5px 0'
   }}>
     <h5><u>Other Information</u></h5>
     <p>1. Student Advisor, From September 2018 to Present <br/>
2. Assistant House Tutor, Sher-E-Bangla Hall, From February 2020 to 2021</p>
   </Row>

    </Container>
  </div>
  )
}

export default SurajitKumarMandal