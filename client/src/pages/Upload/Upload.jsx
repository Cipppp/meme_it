import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './Upload.css';
import Button from 'react-bootstrap/Button';
import MemeSection from '../MemeSection/MemeSection';
import { useDropzone } from 'react-dropzone';
import Swal from 'sweetalert2'

function Upload() {
    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        // accept only .jpg, .jpeg și .gif files
        accept: {
            'image/jpeg': ['.jpg', '.jpeg'],
            'image/gif': ['.gif'],
            'image/png': ['.png'],
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
        // when uploading a file that is not an image, show an error
        onDropRejected: (fileRejections) => {
            Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
        },
        // when is successful, show a success message
        onDropAccepted: (fileRejections) => {
            Swal.fire({
                title: 'Success!',
                text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }

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

    const handleOnClick = () => {
        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
    }

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
    }, [files]);

    return (
        <>
            <div id="upload" className="content">
                <Row className="bg-white rounded-4 upload-card">
                    <Col
                        className="d-flex flex-column upload-text"
                        xs={12}
                        md={6}
                    >
                        <Row>
                            <h1 className="form-header fw-bold">
                                Ai tupeu și crezi că ești amuzant?
                            </h1>
                        </Row>
                        <Row>
                            <p className="form-sub-header">
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
                                <Button className="upload-button" type="submit" onClick={handleOnClick}>
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
