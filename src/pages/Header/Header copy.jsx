import React from 'react'
import './Header.css'
const Header = () => {
    return (
        <div className="headerDiv">
            <div className="tituloApp">
                <h1>Tsundoku</h1>
            </div>
            <nav className="navbar">
                {/* Cuando enrutemos cambiamos el a href por los Link de React */}
                <a href="">Inicio</a>
                <a href="">Galeria</a>
                <a href="">Login</a>
            </nav>
        </div>
    )
}

export default Header
