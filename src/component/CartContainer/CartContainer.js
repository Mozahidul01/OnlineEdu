import React from 'react';
import { Container, Col, Row, Button} from 'react-bootstrap';
import './CartContainer.css'

const CartContainer = (props) => {

    const cart = props.cart;
    const total = cart.reduce((total, course) => total + course.price, 0);
    
    return (
        <div>
            <Container fluid className="cart-box shadow-lg">
                <Row>
                <Col md={8} className="text"><p>Courses Selected: </p></Col>
                <Col md={4} className="number" ><p>{cart.length}</p></Col>
                </Row>
                <Row>
                <Col md={8} className="text"><p>Course Price: </p></Col>
                <Col md={4} className="number" ><p>&#2547; {total}</p></Col>
                </Row>
                <Row>
                <Col md={8} className="text"><p>Total Payable: </p></Col>
                <Col md={4} className="number" ><p>&#2547; {total}</p></Col>
                </Row>
                <Row className="justify-content-md-center">
                <Col md={10}><Button className="checkout-btn">Check Out</Button></Col>
                </Row> 
            </Container>
        </div>
    );
};

export default CartContainer;