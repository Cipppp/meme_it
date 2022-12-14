import React from 'react';
import meme1 from '../../assets/image1.svg';
import meme2 from '../../assets/image2.svg';
import meme3 from '../../assets/image3.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MemeSection({ thumbs }) {
    return (
        <Container>
            <Row>
                <h1 className="fw-bold mt-5 mb-5 meme-title">Most Viewed</h1>
            </Row>
            <Row className="mb-4">
                <Col
                    className="d-flex flex-column align-items-center justify-content-center"
                    xs={12}
                    md={6}
                    lg={4}
                >
                    <img
                        src={meme1}
                        alt=""
                        style={{ height: '24rem', width: '24rem' }}
                        className="img-fluid"
                    />
                </Col>
                <Col
                    className="d-flex flex-column align-items-center justify-content-center"
                    xs={12}
                    md={6}
                    lg={4}
                >
                    <img
                        src={meme2}
                        alt=""
                        style={{ height: '24rem', width: '24rem' }}
                    />
                </Col>
                <Col
                    className="d-flex flex-column align-items-center justify-content-center"
                    xs={12}
                    md={6}
                    lg={4}
                >
                    {' '}
                    <img
                        src={meme3}
                        alt=""
                        style={{ height: '24rem', width: '24rem' }}
                    />
                </Col>
                <aside>{thumbs}</aside>
            </Row>
            <Row></Row>
        </Container>
    );
}

export default MemeSection;
