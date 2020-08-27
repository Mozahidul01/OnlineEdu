import React from 'react';
import './Footer.css'
import { Container, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    return (
        <div className="footer">
            <Container fluid="sm">
                <Row>
                <Col md={6} className="copyright">
                    <p>&#169; All Right Reserved By OnlineEdu ||2020</p>
                </Col>
                <Col md={6} className="text-center" >
                    <ul>
                        <li className="social-icon"><FontAwesomeIcon icon={faFacebookF} /></li>
                        <li className="social-icon"><FontAwesomeIcon icon={faTwitter} /></li>
                        <li className="social-icon"><FontAwesomeIcon icon={faInstagram} /></li>
                        <li className="social-icon"><FontAwesomeIcon icon={faLinkedinIn} /></li>
                    </ul>
                
                </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;