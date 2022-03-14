import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Helmet from 'react-helmet'
import img from '../../../img/assets/Teacher Profile/258755.jpg'

const MdSohelChowdhury = () => {
  return (
    <div style={{
      margin: '50px'
  }}>
    <Helmet>
             
             <title>Md. Sohel Chowdhury</title>
         </Helmet>
    <Container>
    <h2 style={{textAlign: 'start'}}>TEACHERS PROFILE</h2>
    <hr/>
   <Row style={{
     padding: '10px'
   }}>
 <Col md={6}>
 <h4>Md. Sohel Chowdhury</h4>
 </Col>
    <Col md={6}> <img src={img} alt="" width="100px" fluid/></Col>
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
       }}>Master of Business Administration (MBA)</p>
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
       }}>	+8801911285898</p>
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
       }}>mschowdhury@bu.ac.bd</p>
     </Col>
   </Row>
   <div style={{
     padding: '10px 0',
     textAlign: 'start'
   }}>
     
     <p style={{textAlign: "start"}}><strong><u>Research Interest</u></strong> </p>
     <p>
</p>
   </div>
   <Row style={{
     textAlign: 'start', 
     background: '#dddddd',
     padding: '10px 0',
     margin: '5px 0'
   }}>
     <h5><u>Publication</u></h5>
<li> Shakil, R. M., Hassan, M. A. B., Kelana, B. W. B. Y., Mollah, M. A., & Chowdhury, M.S. (2019). Line Managers’ Performance of Strategic Human Resource Roles: Creating Value, Not Rhetoric. International Journal of Recent Technology and Engineering (IJRTE).  Vol. 8 (3S2). pp. 630-634. ISSN. 2277-3878 </li>
<li> Chowdhury, M.S. (2017).Understanding the Attitude of Fresh Graduates toward Career Development in Nationalized Commercial Banks (NCBs) in Bangladesh. Barisal University Journal of Business Studies, Vol. 4 (2), pp. 145-164. ISSN 2411-247X.  </li>
<li> Chowdhury, M.S., Masud, A.A., Hossain, M.S., & Mollah, M.A. (2017). Factors Contributing Employees’ Turnover Decisions: A Quantitative Study on Non Government Organizations (NGOs) in Bangladesh. Barisal University Journal of Business Studies. Vol. 4, pp. 11-28. ISSN 2411-247X.  </li>
<li> Chowdhury, M.S. (2016). A Quantitative Study on Push, Pull and Personal Factors Affecting Employees’ Turnover Intention: A Case of Nationalized Commercial Banks (NCBs) in Bangladesh. Journal of Information and Knowledge Management, Vol.6 (9), pp. 1-14. ISSN 2224-896X.  </li>
<li> Hossain, M.S., Chowdhury, M.S., & Lipy, N.S. (2016). Exploratory Analysis of Tourists’ Satisfaction Level on Tourism Goods and Services of Kuakata and Sundarban, Bangladesh. Journal of Business Research (JBR),  Begum Rokeya University, Bangladesh. Vol. 1(1), PP. 213-233. ISSN 2412-7043.</li>
<li> Mollah, M.A., Zahan, I., & Chowdhury, M.S. (2015). An Empirical Study on Human Resource Management Practices of Small and Medium Enterprises (SMEs) in Bangladesh. European Journal of Business and Management. Vol.7 (23), pp. 10-18. ISSN. 2222-2839</li>
   </Row>
   <Row style={{
     textAlign: 'start'
   }}>
     <p><u>Other Information</u></p>
     <p>
     Peer-Reviewed Conference Proceedings: <br/>
1. Chowdhury, M.S. (2016). Understanding the Attitudes of Fresh Graduates toward Career Development in Nationalized <br/>
    Commercial Banks (NCBs): Bangladesh Perspectives. Proceedings of the International Annual Banking Conference.<br/>
    Bangladesh Institute of Bank Management (BIBM). Dhaka, Bangladesh.
     </p>
   </Row>
    </Container>
  </div>
  )
}

export default MdSohelChowdhury