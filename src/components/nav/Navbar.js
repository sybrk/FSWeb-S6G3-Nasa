import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// import "./navbar.css"

const MyNavbar = (props) => {
    const {setInputToShow} = props;
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="/">Nasa</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={ ()=> setInputToShow("Random")}>Random</Nav.Link>
                        <Nav.Link onClick={ ()=> setInputToShow("Specific")}>Specific</Nav.Link>
                        <Nav.Link onClick={ ()=> setInputToShow("Range")}>Range</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
        // <div className="navbar-container">
        //     <nav className="nav-items">
        //         <button onClick={ ()=> setInputToShow("Random")} >Random</button>
        //         <button onClick={ ()=> setInputToShow("Specific")} >Specific</button>
        //         <button onClick={ ()=> setInputToShow("Range")} >Range</button>
        //     </nav>
        // </div>
    )
}

export default MyNavbar;