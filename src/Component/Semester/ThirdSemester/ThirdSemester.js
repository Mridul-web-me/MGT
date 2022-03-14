import React from 'react'
import { Table } from 'react-bootstrap'
import Helmet from 'react-helmet'

const ThirdSemester = () => {
  return (
      <>
        <Helmet>
             
             <title>Third Semester</title>
         </Helmet>
    <h2 style={{
      margin: '20px'
    }}>Third Semester</h2>
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
      <td>MGT 211</td>
      <td>Electronic Business</td>
      <td>3.00</td>
    </tr>
    <tr>
      <td>MGT 212</td>
      <td>Micro Economics</td>
      <td>3.00</td>
    </tr>
    <tr>
      <td>MGT 213</td>
      <td>Business Statistics-(1)</td>
      <td>3.00</td>
    </tr>
    <tr>
      <td>MGT 214</td>
      <td>Principles Of Finance</td>
      <td>3.00</td>
    </tr>
    <tr>
      <td>MGT 215</td>
      <td>Business Law</td>
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

export default ThirdSemester