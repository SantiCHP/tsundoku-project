import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import {Nav,Navbar} from "react-bootstrap";
import './Header.css';

const Header = () => {
    // // Funcion para el logout de la Sesion
    // const logout = () =>{
    //     if(localStorage.getItem("userData").length <= 0){
    //         console.log("No tiene token de usuario no deberia estar aqui.");
    //     }else{
    //         localStorage.removeItem("userData");
    //         // return <Redirect to="/login"/>
    //     }
    // }
return (
<div>
    
    <Navbar bg="dark" expand="lg">
  {/* <Container> */}
    <Navbar.Brand><Link to="/tsundoku/Inicio" className="navbar-brand" id='logo'>TSUNDOKU</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" className="buttonHome" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link><Link to="/tsundoku/Inicio" className="nav-link" id='buttonHome'>Inicio</Link></Nav.Link>
        <Nav.Link><Link to="/tsundoku/Galeria" className="nav-link" id='buttonHome'>Galeria</Link></Nav.Link>
        <Nav.Link><Link to="/tsundoku/Coleccion" className="nav-link" id='buttonHome'>Coleccion</Link></Nav.Link>
        {/* <Nav.Link><Link to="/tsundoku/Logout" className="nav-link" id='buttonHome'>Logout</Link></Nav.Link> */} 
      </Nav>
    </Navbar.Collapse>
  {/* </Container> */}
</Navbar>
</div>
)
}

export default Header