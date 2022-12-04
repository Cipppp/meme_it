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
                    <Col
                        xs={12}
                        md={6}
                        className="d-flex flex-column align-items-center justify-content-center"
                    >
                        <Row>
                            <h1 className="d-flex align-items-center justify-content-center text-justify text-center fw-bold">
                                Partajarea de meme-uri nu a fost niciodată mai
                                simplă!
                            </h1>
                        </Row>
                        <Row>
                            <span className="text-center fw-light sub-header">
                                Platforma ideală pentru studenții de la
                                Politehnică, amuzați de câte materii o să pice
                                semestrul asta.
                            </span>
                        </Row>
                        <Row>
                            <Button
                                className="upload-button fw-normal"
                                size="lg"
                            >
                                Upload a MEME
                            </Button>
                        </Row>
                    </Col>
                    <Col md={6} xs={12}>
                        <img src={homeImage} alt="" className="img-fluid" />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Homepage;
