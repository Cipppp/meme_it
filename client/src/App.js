import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainNavbar from './components/MainNavbar';
import Home from './pages/Home/Home.jsx';
import './App.css';
import Upload from './pages/Upload/Upload';
import Footer from './components/Footer';
// import MemeSection from './pages/MemeSection/MemeSection';
// import TestPage from './pages/TestPage/TestPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <MainNavbar />
            {/* <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/upload" element={<Upload />} />
            </Routes> */}
            <Home />
            <Upload />
            {/* <MemeSection /> */}
            {/* <TestPage /> */}
            <Footer />
        </Router>
    );
}

export default App;
