import React from 'react';
import { MDBFooter, MDBIcon } from 'mdb-react-ui-kit';

function Footer() {
    return (
        <MDBFooter bgColor="light" className="text-center text-light">
            <section style={{ backgroundColor: '#06114F' }}>
                <div className="d-flex justify-content-center p-4 pb-0">
                    <a
                        href="https://instagram.com/lsacbucuresti?igshid=YmMyMTA2M2Y="
                        className="me-4 text-reset"
                    >
                        <MDBIcon fab icon="instagram" />
                    </a>
                    <a
                        href="https://twitter.com/lsacbucuresti"
                        className="me-4 text-reset"
                    >
                        <MDBIcon fab icon="twitch" />
                    </a>
                    <a
                        href="https://www.facebook.com/LsacBucuresti/"
                        className="me-4 text-reset"
                    >
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
