import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { logoutUser } from '../actions/userActions';

export default function Navbartest() {

    const cartstate = useSelector(state => state.cartReducer)
    const userstate = useSelector(state => state.loginUserReducer)
    const { currentUser } = userstate
    const dispatch = useDispatch()


    return (

        <Navbar bg="light" expand="lg"  >
            <Container>
                <Navbar.Brand href="/">FOODETY</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        { currentUser ? (
                            <NavDropdown title={currentUser.name} id="basic-nav-dropdown">
                                <NavDropdown.Item className="justify-content-end" href="orders">
                                    Orders
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#" onClick={()=>{dispatch(logoutUser())}}>
                                    Log out
                                </NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            <Nav.Link href="/login">Login</Nav.Link>
                        )}
                        <Nav.Link href="/cart">Cart {cartstate.cartItems.length}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}