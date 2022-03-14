import React from 'react'
import { Table } from 'react-bootstrap'
import Helmet from 'react-helmet'

const FourthSemester = () => {
  return (
    <>
      <Helmet>
             
             <title>Fourth Semester</title>
         </Helmet>
    <h2 style={{
      margin: '20px'
    }}>Fourth Semester</h2>
     <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Course Code</th>
      <th>Course Title</th>
      <th>Credit Hours</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>MGT 221</td>
      <td>Industrial Law</td>
      <td>3.00</td>
    </tr>
    <tr>
      <td>MGT 222</td>
      <td>Macro Economics</td>
      <td>3.00</td>
    </tr>
    <tr>
      <td>MGT 223</td>
      <td>Business Statistics-(2)</td>
      <td>3.00</td>
    </tr>
    <tr>
      <td>MGT 224</td>
      <td>Human Resources Management</td>
      <td>3.00</td>
    </tr>
    <tr>
      <td>MGT 225</td>
      <td>Business Environment and Entrepreneurship Development </td>
      <td>3.00</td>
    </tr>
    <tr>
      <td></td>
      <td><strong>Viva-Voce: 25 Marks</strong></td>
      <td>0.75</td>
    </tr>
  </tbody>
</Table>
   </>
  )
}

export default FourthSemester