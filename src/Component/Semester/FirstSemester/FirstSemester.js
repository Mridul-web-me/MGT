import React from 'react'
import { Table } from 'react-bootstrap'
import Helmet from 'react-helmet'

const FirstSemester = () => {
  return (
    <>
     <Helmet>
             
             <title>First Semester</title>
         </Helmet>
    <h2 style={{
      margin: '20px'
    }}>First Semester</h2>
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
      <td>MGT 111</td>
      <td>Introduction to Business</td>
      <td>3.00</td>
    </tr>
    <tr>
      <td>MGT 112</td>
      <td>Introduction to Computer</td>
      <td>3.00</td>
    </tr>
    <tr>
      <td>MGT 113</td>
      <td>Business Mathematics-(1)</td>
      <td>3.00</td>
    </tr>
    <tr>
      <td>MGT 114</td>
      <td>Basic English For Business</td>
      <td>3.00</td>
    </tr>
    <tr>
      <td>MGT 115</td>
      <td>Principles Of Management</td>
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

export default FirstSemester