import React from 'react'
import { Table } from 'react-bootstrap'
import Helmet from 'react-helmet'

const EightSemester = () => {
  return (
    <>
    <Helmet>
             
             <title>Eight Semester</title>
         </Helmet>
    <h2 style={{
      margin: '20px'
    }}>Eight Semester</h2>
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
      <td>MGT 421</td>
      <td>Corporate Social Responsiblity & Business Ethics</td>
      <td>3.00</td>
    </tr>
    <tr>
      <td>MGT 422</td>
      <td>Strategic Management</td>
      <td>3.00</td>
    </tr>
    <tr>
      <td>MGT 423</td>
      <td>Management Of Multinational Enterprise </td>
      <td>3.00</td>
    </tr>
    <tr>
      <td>MGT 424</td>
      <td>Management Accounting</td>
      <td>3.00</td>
    </tr>
    <tr>
      <td>MGT 425</td>
      <td>Management Thought</td>
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

export default EightSemester