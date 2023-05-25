import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';

export default function NavbarComponent() {

    return <>


        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to='/' style={({ isActive }) => {
                            return {
                                fontWeight: isActive ? 'bold' : ''
                            }
                        }}>Home</NavLink>
                        <NavLink to='/addUser' className={({ isActive, isPending }) =>
                            isActive ? "active" : ""
                        } style={({ isActive }) => {
                            return {
                                fontWeight: isActive ? 'bold' : ''
                            }
                        }}>Login</NavLink>
                        <NavLink to='/signup' style={({ isActive }) => {
                            return {
                                fontWeight: isActive ? 'bold' : ''
                            }
                        }}>Sign Up</NavLink>
                        <NavLink to='/products' style={({ isActive }) => {
                            return {
                                fontWeight: isActive ? 'bold' : ''
                            }
                        }}>Products</NavLink>
                        <NavLink to='/contactus' style={({ isActive }) => {
                            return {
                                fontWeight: isActive ? 'bold' : ''
                            }
                        }}>Contact Us</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    </>
}