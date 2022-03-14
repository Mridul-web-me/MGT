import React from 'react'
import { Table } from 'react-bootstrap'

const FifthSemester = () => {
  return (
    <>
    <h2 style={{
      margin: '20px'
    }}>Fifth Semester</h2>
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
      <td>MGT 311</td>
      <td>Industrial Sociology</td>
      <td>3.00</td>
    </tr>
    <tr>
      <td>MGT 312</td>
      <td>Insurance And Risk Management</td>
      <td>3.00</td>
    </tr>
    <tr>
      <td>MGT 313</td>
      <td>Taxation</td>
      <td>3.00</td>
    </tr>
    <tr>
      <td>MGT 314</td>
      <td>Industrial Relations</td>
      <td>3.00</td>
    </tr>
    <tr>
      <td>MGT 315</td>
      <td>Organizational Development</td>
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

export default FifthSemester