import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ReactComponent as MemeITLogo } from '../assets/memeit_logo.svg';

function MainNavbar() {
    return (
        <>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand href="#home">
                        <MemeITLogo />
                    </Navbar.Brand>
                    <Nav className="ml-auto" variant="white">
                        <Nav.Link href="#features">Logare</Nav.Link>
                        <Nav.Link href="#pricing">Creare cont</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default MainNavbar;
