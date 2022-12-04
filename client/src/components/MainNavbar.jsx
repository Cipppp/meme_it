import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ReactComponent as MemeITLogo } from '../assets/memeit_logo.svg';
import RegisterModal from '../components/RegisterModal';
import LoginModal from './LoginModal';
import './MainNavbar.css';
import { ReactComponent as ToggleLogo } from '../assets/fe_app-menu.svg';

function MainNavbar() {
    const [registerShow, setRegisterShow] = useState(false);
    const [loginShow, setLoginShow] = useState(false);
    const user = localStorage.getItem('token');

    const handleLoginModal = () => {
        setLoginShow(true);
    };

    const handleRegisterModal = () => {
        setRegisterShow(true);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    };

    return (
        <>
            {/* Create a navbar for large devices and for smaller devices create a hamburger menu */}
            <Navbar className="fixed-top shadow" bg="white" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <MemeITLogo className="navbar-logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls="basic-navbar-nav"
                        className="hamburger"
                    >
                        <ToggleLogo className="navbar-toggle" />
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        {!user ? (
                            <Nav
                                className="ml-auto d-flex align-items-center justify-content-center "
                                variant="white"
                            >
                                <Nav.Link onClick={handleLoginModal}>
                                    Logare
                                </Nav.Link>
                                <Nav.Link onClick={handleRegisterModal}>
                                    Creare cont
                                </Nav.Link>
                            </Nav>
                        ) : (
                            <Nav className="ml-auto" variant="white">
                                <Nav.Link onClick={handleLogout}>
                                    Delogare
                                </Nav.Link>
                            </Nav>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <RegisterModal
                show={registerShow}
                onHide={() => setRegisterShow(false)}
            />
            <LoginModal show={loginShow} onHide={() => setLoginShow(false)} />
        </>
    );
}

export default MainNavbar;
