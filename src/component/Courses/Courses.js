import React from 'react';
import data from '../../courseData/courseData'
import './Courses.css'
import { useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import CourseContainer from '../CourseContainer/CourseContainer'
import CartContainer from '../CartContainer/CartContainer';

const Courses = () => {

    const [course, setCourse] = useState(data);
    const [cart, setCart] = useState([]);
    const handleAddCourse = (course) =>{
        const newCart = [...cart, course];
        setCart(newCart);
    }
    
    return (
        <div>
            <Container fluid>
                <Row>
                    
                    <Col md={8} className="courses">
                        <Container>
                            <Row className="title">
                            <Col><h1>Our featured courses</h1></Col>  
                            </Row>
                            
                            <Row> 
                                {course.map(course =>
                                    <Col sm={12} md={12} xl={6}>
                                        <CourseContainer handleAddCourse={handleAddCourse} course={course}></CourseContainer>
                                    </Col>
                                  )
                                }
                            </Row>
                            
                        </Container>
                    </Col>
                    
                    <Col md={4} className="cart">
                        <Container>
                            <h2> Order Summary</h2>
                            <Row className="justify-content-md-center">
                                <Col md={10}>
                                <CartContainer cart={cart}></CartContainer>
                                </Col>
                            </Row>
                            
                        </Container>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    );
};

export default Courses;