import React from 'react'
import { Table } from 'react-bootstrap'

const SeventhSemester = () => {
  return (
    <>
    <h2 style={{
      margin: '20px'
    }}>Seventh Semester</h2>
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
      <td>MGT 411</td>
      <td>Project Management</td>
      <td>3.00</td>
    </tr>
    <tr>
      <td>MGT 412</td>
      <td>Research Mathedology</td>
      <td>3.00</td>
    </tr>
    <tr>
      <td>MGT 413</td>
      <td>Internatinal Business</td>
      <td>3.00</td>
    </tr>
    <tr>
      <td>MGT 414</td>
      <td>Total Quality Management</td>
      <td>3.00</td>
    </tr>
    <tr>
      <td>MGT 415</td>
      <td>Investment Management</td>
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

export default SeventhSemester