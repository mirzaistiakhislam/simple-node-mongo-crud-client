import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">CRUD OPERATIONS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
                        <Nav>
                            <Link className='nav-link active text-white' to='/'>Home</Link>
                            <Link className='nav-link text-white' to='/adduser'>Add User</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">CRUD OPERATIONS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <ul className="nav">
                        <li className="nav-item">
                            <Link className='nav-link active text-white' to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link text-white' to='/adduser'>Add User</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link text-white' to='/updateuser'>Update User</Link>
                        </li>
                    </ul>
                </Container>
            </Navbar> */}
        </div>
    );
};

export default Header;