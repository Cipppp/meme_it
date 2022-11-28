import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import homeImage from '../../assets/main.svg';
import './Home.css';

function Homepage() {
    return (
        <>
            <Container>
                <Row>
                    <Col className="d-flex flex-column align-items-center justify-content-center">
                        <Row>
                            <h1>
                                Partajarea de meme-uri nu a fost niciodată mai
                                simplă!
                            </h1>
                        </Row>
                        <Row>
                            <p>
                                Platforma ideală pentru studenții de la
                                Politehnică, amuzați de câte materii o să pice
                                semestrul asta.
                            </p>
                        </Row>
                        <Row>
                            <Button className="upload-button" size="lg">
                                Upload a MEME
                            </Button>
                        </Row>
                    </Col>
                    <Col>
                        <img src={homeImage} alt="" />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Homepage;
