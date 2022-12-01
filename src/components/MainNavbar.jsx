import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ReactComponent as MemeITLogo } from '../assets/memeit_logo.svg';
import AuthModal from '../components/AuthModal';
import './MainNavbar.css';

function MainNavbar() {
    const [modalShow, setModalShow] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [text, setText] = useState([]);

    const handleLoginModal = () => {
        setText(['Welcome back!', 'Logare']);
        setIsLogin(true);
        setModalShow(true);
    };

    const handleRegisterModal = () => {
        setText(['Welcome!', 'Creare cont']);
        setIsLogin(false);
        setModalShow(true);
    };

    return (
        <>
            <Navbar className="fixed-top shadow" bg="white">
                <Container>
                    <Navbar.Brand href="#home">
                        <MemeITLogo className="navbar-logo" />
                    </Navbar.Brand>
                    <Nav className="ml-auto" variant="white">
                        <Nav.Link onClick={handleLoginModal}>Logare</Nav.Link>
                        <Nav.Link onClick={handleRegisterModal}>
                            Creare cont
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <AuthModal
                isLoign={isLogin}
                show={modalShow}
                text={text}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default MainNavbar;
