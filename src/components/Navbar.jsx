import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function PortfolioNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#about-me">About Me</Nav.Link>
                        <NavDropdown title="Projects" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#projects">All Projects</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#project1">Project1</NavDropdown.Item>
                            <NavDropdown.Item href="#project2">Project2</NavDropdown.Item>
                            <NavDropdown.Item href="#project3">Project3</NavDropdown.Item>
                            <NavDropdown.Item href="#project4">Project4</NavDropdown.Item>
                            <NavDropdown.Item href="#project5">Project5</NavDropdown.Item>
                            <NavDropdown.Item href="#project6">Project6</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        <Nav.Link href="#resume">Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default PortfolioNavbar;