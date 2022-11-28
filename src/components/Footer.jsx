import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn,
} from 'mdb-react-ui-kit';

function Footer() {
    return (
        <MDBFooter bgColor="light" className="text-center text-light">
            <section style={{ backgroundColor: '#06114F' }}>
                <div className="d-flex justify-content-center p-4 pb-0">
                    <a href="" className="me-4 text-reset">
                        <MDBIcon fab icon="instagram" />
                    </a>
                    <a href="" className="me-4 text-reset">
                        <MDBIcon fab icon="twitch" />
                    </a>
                    <a href="" className="me-4 text-reset">
                        <MDBIcon fab icon="facebook-f" />
                    </a>
                </div>
                <div className="text-center p-4">
                    Copyright 2022 | La muncă, nu la întins mâna.
                </div>
            </section>
        </MDBFooter>
    );
}

export default Footer;
