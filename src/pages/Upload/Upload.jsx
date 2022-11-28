import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './Upload.css';
import Button from 'react-bootstrap/Button';
import TestPage from '../TestPage/TestPage';
import MemeSection from '../MemeSection/MemeSection';
import { useDropzone } from 'react-dropzone';

function Upload() {
    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/*': [],
        },
        onDrop: (acceptedFiles) => {
            setFiles(
                acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    })
                )
            );
        },
    });

    const thumbs = files.map((file) => (
        <div key={file.name}>
            <div>
                <img
                    src={file.preview}
                    // Revoke data uri after image is loaded
                    onLoad={() => {
                        URL.revokeObjectURL(file.preview);
                    }}
                />
            </div>
        </div>
    ));

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
    }, []);

    return (
        <>
            <div className="content">
                <Row className="bg-white rounded upload-card">
                    <Col
                        className="d-flex flex-column align-items-center justify-content-center"
                        xs={12}
                        md={6}
                    >
                        <Row>
                            <h2 className="fs-1">
                                Ai tupeu și crezi că ești amuzant?
                            </h2>
                        </Row>
                        <Row>
                            <p className="fs-5">
                                Trimite-ne un mail și poate ai noroc să ne apuce
                                râsul când îți vedem meme-ul.
                            </p>
                        </Row>
                    </Col>
                    <Col xs={12} md={6}>
                        <Form>
                            <Form.Group className="mb-3" controlId="Descriere">
                                <Form.Label>Descriere</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Descriere"
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>
                                    Meme (jpg, jpeg, png, gif)
                                </Form.Label>
                                <div
                                    {...getRootProps({ className: 'dropzone' })}
                                >
                                    <input {...getInputProps()} />
                                    <p>
                                        Drag 'n' drop some files here, or click
                                        to select files
                                    </p>
                                </div>
                            </Form.Group>

                            <div className="d-flex flex-column align-items-center justify-content-center">
                                <Button className="upload-button" type="submit">
                                    Trimite
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </div>
            <MemeSection thumbs={thumbs} />
        </>
    );
}

export default Upload;
