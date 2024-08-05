/* eslint-disable react/prop-types */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//


import { NavLink } from "react-router-dom";
import "../Navbar/Navbar.css"

const NavbarLink = ({category}) =>{
    return(
        <>
        
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to={`/categorias/${category}`} className="navbarContainer" href="#">{category}</NavLink>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>











            {/* <NavLink to={`/categorias/${category}`} href="#" className="navbarContainer">{category}</NavLink> */}

        </>

    )
}

export default NavbarLink;