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
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="" width='70px' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" style={{
                        justifyContent: 'end'
                    }}>
                        <Nav>
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <NavDropdown title="Course" id="collasible-nav-dropdown">
                                <NavDropdown title="First Year" id="collasible-nav-dropdown" style={{ color: '#000' }}>
                                    <NavDropdown.Item href="#action/3.1">First Semester</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Second Semester</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Second Year" id="collasible-nav-dropdown" style={{ color: '#000' }}>
                                    <NavDropdown.Item href="#action/3.1">Third Semester</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Fourth Semester</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Third Year" id="collasible-nav-dropdown" style={{ color: '#000' }}>
                                    <NavDropdown.Item href="#action/3.1">Fifth Semester</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Sixth Semester</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Fourth Year" id="collasible-nav-dropdown" style={{ color: '#000' }}>
                                    <NavDropdown.Item href="#action/3.1">Seventh Semester</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Eighth Semester</NavDropdown.Item>
                                </NavDropdown>
                            </NavDropdown>

                            <NavDropdown title="Batch" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="">1st</NavDropdown.Item>
                                <NavDropdown.Item href="">2nd</NavDropdown.Item>
                                <NavDropdown.Item href="">3rd</NavDropdown.Item>
                                <NavDropdown.Item href="">4th</NavDropdown.Item>
                                <NavDropdown.Item href="">5th</NavDropdown.Item>
                                <NavDropdown.Item href="">6th</NavDropdown.Item>
                                <NavDropdown.Item href="">7th</NavDropdown.Item>
                                <NavDropdown.Item href="">8th</NavDropdown.Item>
                                <NavDropdown.Item href="">9th</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#pricing">Gallery</Nav.Link>
                            <Nav.Link href="#testimonials">Testimonial</Nav.Link>
                            <Nav.Link href="#pricing">Footer</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Menu