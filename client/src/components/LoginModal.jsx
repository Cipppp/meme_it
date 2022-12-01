// import Modal from 'react-bootstrap/Modal';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { ReactComponent as MemeITLogo } from '../assets/memeit_logo.svg';
// import './AuthModal.css';
// import CustomCloseButton from './CustomCloseButton';
// import axios from 'axios';
// import { Navigate, useNavigate } from 'react-router';

// function LoginModal({ show, onHide, isLogin, text }) {
//     const [data, setData] = useState({
//         email: '',
//         password: '',
//     });

//     const [error, setError] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const url = 'http://localhost:8080/api/auth';
//             const { data: res } = await axios.post(url, data);
//             localStorage.setItem('token', res.token);
//             window.location = '/';
//         } catch (error) {
//             if (
//                 error.response &&
//                 error.response.status === 400 &&
//                 error.response.status <= 500
//             ) {
//                 setError(error.response.data.message);
//             }
//         }
//         console.log(data);
//     };

//     return (
//         <Modal
//             show={show}
//             onHide={onHide}
//             size="lg"
//             aria-labelledby="contained-modal-title-vcenter"
//             centered
//         >
//             <Modal.Header closeButton>
//                 {/* <Modal.Title id="contained-modal-title-vcenter"> */}
//                 <MemeITLogo className="modal-logo" />
//                 {/* </Modal.Title> */}
//             </Modal.Header>
//             <Modal.Body style={{ backgroundColor: '#6f3096' }}>
//                 <Form
//                     className="p-4 bg-white rounded-4 modal-form"
//                     onSubmit={handleSubmit}
//                 >
//                     <h1 className="d-flex align-items-center justify-content-center modal-title">
//                         {text[0]}
//                     </h1>

//                     <Form.Group
//                         inline
//                         className="mb-3"
//                         style={{ display: isLogin ? 'block' : 'none' }}
//                         controlId="formBasicEmail"
//                     >
//                         <Form.Label className="fw-bold">Email</Form.Label>
//                         <Form.Control
//                             type="email"
//                             placeholder="email"
//                             value={data.email}
//                             onChange={(e) =>
//                                 setData({ ...data, email: e.target.value })
//                             }
//                         />
//                     </Form.Group>
//                     {/* ) : null} */}
//                     <Form.Group
//                         inlineclassName="mb-3"
//                         controlId="formBasicPassword"
//                     >
//                         <Form.Label className="fw-bold">Parola</Form.Label>
//                         <Form.Control
//                             type="password"
//                             placeholder="Parola"
//                             value={data.password}
//                             onChange={(e) =>
//                                 setData({ ...data, password: e.target.value })
//                             }
//                         />
//                     </Form.Group>
//                     {error && <div className="text-danger">{error}</div>}
//                     <div className="d-flex flex-column align-items-center justify-content-center">
//                         <Button type="submit" className="upload-button">
//                             {text[1]}
//                         </Button>
//                     </div>
//                 </Form>
//             </Modal.Body>
//         </Modal>
//     );
// }

// export default LoginModal;
