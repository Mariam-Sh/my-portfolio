import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

const Navigation = () => {
   const styleNav ={
        background:'rgb(0,0,0,0.5)',
    }
    return(
        <Navbar  expand="md" fixed="top" style={styleNav}>
            <Navbar.Brand href="#home" className="linkText">My Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{background:'white'}}/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link href="#home" className="linkText">Home</Nav.Link>
                <Nav.Link href="#about" className="linkText">About</Nav.Link>
                <Nav.Link href="#skills" className="linkText">Skills</Nav.Link>
                <Nav.Link href="#contact" className="linkText">Contacts</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default Navigation;