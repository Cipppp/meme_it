import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ReactComponent as MemeITLogo } from '../assets/memeit_logo.svg';
import './AuthModal.css';
import CustomCloseButton from './CustomCloseButton';

function AuthModal({ show, onHide, isLogin, text }) {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                {/* <Modal.Title id="contained-modal-title-vcenter"> */}
                <MemeITLogo className="modal-logo" />
                {/* </Modal.Title> */}
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: '#6f3096' }}>
                <Form className="p-4 bg-white rounded-4 modal-form">
                    <h1 className="d-flex align-items-center justify-content-center modal-title">
                        {text[0]}
                    </h1>
                    <Form.Group
                        inlineclassName="mb-3"
                        controlId="formBasicUsername"
                    >
                        <Form.Label className="fw-bold">Username</Form.Label>
                        <Form.Control type="text" placeholder="username" />
                    </Form.Group>
                    {/* {isLogin == false ? ( */}
                    <Form.Group
                        inline
                        className="mb-3"
                        style={{ display: isLogin ? 'block' : 'none' }}
                        controlId="formBasicEmail"
                    >
                        <Form.Label className="fw-bold">Email</Form.Label>
                        <Form.Control type="email" placeholder="email" />
                    </Form.Group>
                    {/* ) : null} */}
                    <Form.Group
                        inlineclassName="mb-3"
                        controlId="formBasicPassword"
                    >
                        <Form.Label className="fw-bold">Parola</Form.Label>
                        <Form.Control type="password" placeholder="Parola" />
                    </Form.Group>
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <Button type="submit" className="upload-button">
                            {text[1]}
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default AuthModal;
