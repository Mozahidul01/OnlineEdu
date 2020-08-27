import React from 'react';
import "./Header.css"
import { Container, Navbar, Nav, Button} from 'react-bootstrap';

const Header = () => {
    return (
        <div className="header">
            <Container fluid="md">
                <Navbar collapseOnSelect expand="lg">
                    <Navbar.Brand href="#home">
                    <img src="https://i.imgur.com/MvCZOX5.png" alt="logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link className="nav-links" href="#home">Home</Nav.Link>
                            <Nav.Link className="nav-links" href="#features">Features</Nav.Link>
                            <Nav.Link className="nav-links" href="#courses">Courses</Nav.Link>
                        </Nav>
                    
                        <Nav>
                            <Button src="" className="login-btn" >Login</Button>
                        </Nav>
                     </Navbar.Collapse>
                </Navbar>
            </Container>        
        </div>
    );
};

export default Header;