import React from 'react'
import { Table } from 'react-bootstrap'
import Helmet from 'react-helmet'

const SecondSemester = () => {
  return (
    <>
     <Helmet>
             
             <title>Second Semester</title>
         </Helmet>
    <h2 style={{
      margin: '20px'
    }}>Second Semester</h2>
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
      <td>MGT 121</td>
      <td>Bangladesh Studies</td>
      <td>3.00</td>
    </tr>
    <tr>
      <td>MGT 122</td>
      <td>Business Mathematics-(2)</td>
      <td>3.00</td>
    </tr>
    <tr>
      <td>MGT 123</td>
      <td>Business Communication</td>
      <td>3.00</td>
    </tr>
    <tr>
      <td>MGT 124</td>
      <td>Principles Of Marketing</td>
      <td>3.00</td>
    </tr>
    <tr>
      <td>MGT 125</td>
      <td>Principles Of Accounting</td>
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

export default SecondSemester