


    //  THIS SECTION WILL BE ADDED AFTER COMPLETING ROUTER SETUP
    //  I MADE IT JUST FOR PRACTICE
    //  -THANKS...



import React from 'react';
import './HighlightedSection.css'
import { Container, Col, Row, Button } from 'react-bootstrap';

const HighlightedSection = () => {
    return (
        <div className="highlight-area">
            <Container fluid="md">
            <Row className="highlight-row" >
                <Col md={7} className="highlight-content">
                    <h4 className="sub-title">Popular online courses</h4>
                    <h1 className="title">The New Way to learn properly with us!</h1>
                    <Button src="" className="highlight-btn">Get Started</Button>
                </Col>
                
                <Col md={5} className="m-auto">
                    <img className="highlight-img" src="https://i.imgur.com/VHCRLod.png" alt="highlight-img" fluid/>
                </Col>
            </Row>
            </Container>
            
        </div>
    );
};

export default HighlightedSection;