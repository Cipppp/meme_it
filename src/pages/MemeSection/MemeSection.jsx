import React from 'react';
import meme1 from '../../assets/image1.svg';
import meme2 from '../../assets/image2.svg';
import meme3 from '../../assets/image3.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MemeSection({ thumbs }) {
    return (
        <Container className="mt-4">
            <Row>
                <h1>Most Viewed</h1>
            </Row>
            <Row className="mb-4">
                <Col className="d-flex flex-column align-items-center justify-content-center">
                    <img
                        src={meme1}
                        alt=""
                        style={{ height: '24rem', width: '24rem' }}
                    />
                </Col>
                <Col>
                    <img
                        src={meme2}
                        alt=""
                        style={{ height: '24rem', width: '24rem' }}
                    />
                </Col>
                <Col>
                    {' '}
                    <img
                        src={meme3}
                        alt=""
                        style={{ height: '24rem', width: '24rem' }}
                    />
                </Col>
                <aside>{thumbs}</aside>
            </Row>
        </Container>
    );
}

export default MemeSection;
