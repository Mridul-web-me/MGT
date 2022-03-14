import React from 'react'
import { Table } from 'react-bootstrap'

const SixsthSemester = () => {
  return (
    <>
    <h2 style={{
      margin: '20px'
    }}>Sixth Semester</h2>
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
      <td>MGT 321</td>
      <td>Management Information System</td>
      <td>3.00</td>
    </tr>
    <tr>
      <td>MGT 322</td>
      <td>Organizational Behavior</td>
      <td>3.00</td>
    </tr>
    <tr>
      <td>MGT 323</td>
      <td>Marketing Management</td>
      <td>3.00</td>
    </tr>
    <tr>
      <td>MGT 324</td>
      <td>Bank Management</td>
      <td>3.00</td>
    </tr>
    <tr>
      <td>MGT 325</td>
      <td>Operations Management</td>
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

export default SixsthSemester