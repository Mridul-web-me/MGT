import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../img/assets/mgt.png'

const Menu = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" style={{
                background: '#040a1a'
            }} variant="dark">
                <Container>
                    <Navbar.Brand href="/home">
                        <img src={logo} alt="" width='70px' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" style={{
                        justifyContent: 'end'
                    }}>
                        <Nav>
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <NavDropdown title="Course" id="collasible-nav-dropdown">
                                <NavDropdown title="First Year" id="collasible-nav-dropdown" >
                                    <NavDropdown.Item >
                                        <Link to="/FirstSemester">First Semester</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item >
                                        <Link to="/SecondSemester">Second Semester</Link>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Second Year" id="collasible-nav-dropdown" >
                                <NavDropdown.Item >
                                        <Link to="/ThirdSemester">First Semester</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item >
                                        <Link to="/FourthSemester">Second Semester</Link>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Third Year" id="collasible-nav-dropdown">
                                <NavDropdown.Item >
                                        <Link to="/FifthSemester">First Semester</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item >
                                        <Link to="/SixsthSemester">Second Semester</Link>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Fourth Year" id="collasible-nav-dropdown">
                                <NavDropdown.Item >
                                        <Link to="/SeventhSemester">First Semester</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item >
                                        <Link to="/EightSemester">Second Semester</Link>
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </NavDropdown>

                            <NavDropdown title="Batch" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="1st-batch">1st</NavDropdown.Item>
                                <NavDropdown.Item href="2nd-batch">2nd</NavDropdown.Item>
                                <NavDropdown.Item href="3rd-batch">3rd</NavDropdown.Item>
                                <NavDropdown.Item href="4th-batch">4th</NavDropdown.Item>
                                <NavDropdown.Item href="5th-batch">5th</NavDropdown.Item>
                                <NavDropdown.Item href="6th-batch">6th</NavDropdown.Item>
                                <NavDropdown.Item href="7th-batch">7th</NavDropdown.Item>
                                <NavDropdown.Item href="8th-batch">8th</NavDropdown.Item>
                                <NavDropdown.Item href="9th-batch">9th</NavDropdown.Item>
                                <NavDropdown.Item href="10th-batch">10th</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#gallery">Gallery</Nav.Link>
                            <Nav.Link href="#testimonials">Testimonial</Nav.Link>
                            <Nav.Link href="#footer">Footer</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>










                </Container>
            </Navbar>
        </div>
    )
}

export default Menu