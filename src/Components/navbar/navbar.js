import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';
import { useSelector } from 'react-redux';
import { useContext, useEffect } from 'react';
import { languageContext } from '../../Contexts/language';

export default function NavbarComponent() {
    const favorite = useSelector((state) => state.favorites.favorite);

    const {language} = useContext(languageContext)
    useEffect(()=>{
        console.log(language);
    },[language])

    return <>


        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to='/home' style={({ isActive }) => {
                            return {
                                fontWeight: isActive ? 'bold' : ''
                            }
                        }}>Home</NavLink>
                        <NavLink to='/favorite' style={({ isActive }) => {
                            return {
                                fontWeight: isActive ? 'bold' : ''
                            }
                        }}>Favorite <span style={{color: 'white',fontWeight:'bold', padding: '0.2rem', border: '1px solid black', borderRadius: '50%', backgroundColor: 'red'}}>{favorite.length}</span></NavLink>
                        {/* <Nav.Link to={'/'} as={Link}>Home</Nav.Link> */}
                        <NavLink to='/login' className={({ isActive, isPending }) =>
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
                        {/* <NavLink to='/products' style={({ isActive }) => {
                            return {
                                fontWeight: isActive ? 'bold' : ''
                            }
                        }}>Products</NavLink> */}
                        <NavLink to='/contactus' style={({ isActive }) => {
                            return {
                                fontWeight: isActive ? 'bold' : ''
                            }
                        }}>Contact Us</NavLink>
                        <NavLink to='' style={({ isActive }) => {
                            return {
                                fontWeight: isActive? 'bold' : ''
                            }
                        }}>{language}</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    </>
}