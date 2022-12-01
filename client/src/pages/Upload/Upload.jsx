import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './Upload.css';
import Button from 'react-bootstrap/Button';
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
                    alt="Something went wrong"
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
    }, [files]);

    return (
        <>
            <div className="content">
                <Row className="bg-white rounded-4 upload-card">
                    <Col
                        className="d-flex flex-column upload-text"
                        xs={12}
                        md={6}
                    >
                        <Row>
                            <h2 className="fs-1 ">
                                Ai tupeu și crezi că ești amuzant?
                            </h2>
                        </Row>
                        <Row>
                            <p className="fs-4">
                                Trimite-ne un mail și poate ai noroc să ne apuce
                                râsul când îți vedem meme-ul.
                            </p>
                        </Row>
                    </Col>
                    <Col xs={12} md={6}>
                        <Form>
                            <Form.Group className="mb-3" controlId="Descriere">
                                <Form.Label className="fw-bold">
                                    Descriere
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Descriere"
                                    className="border border border-dark rounded-2"
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label className="fw-bold">
                                    Meme (jpg, jpeg, png, gif)
                                </Form.Label>
                                <div
                                    {...getRootProps({ className: 'dropzone' })}
                                    className="p-5 border border border-dark rounded-2"
                                >
                                    <input {...getInputProps()} />
                                    <p className="text-muted">
                                        drag & drop image or click to upload
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
