import React from 'react';
import Header from '../Header/Header.jsx'
import './Inicio.css';

const Inicio = () => {
    
return (
<div>
        <Header />
    {/* Pasar a clasName todo lo correspondiente de CSS puro */}
    <div className="banner">
        <div className="a">
            <div className="img image-one"></div>
            <div className="img image-two"></div>
            <div className="img image-three"></div>
            <div className="img image-four"></div>
        </div>
    </div>
    <div className="presentacion">
        <div className="imagen-desc"></div>
        <div className="texto-desc">
            <span>Bienvenido a Tsundoku APP</span>
            <p>Hola a todos y bienvenidos a una experiencia única y personalizada para cada uno de nuestros usuarios.
                Con mas de mil ejemplares diferentes entre manga y cómic, podréis crear vuestra propia colección
                añadiendolos mediante el botón add to my colection o incluso poder añadir los títulos que queráis
                conseguir con nuestro botón de add to my wishlist nuestra pagina os ofrece la oportunidad única de
                llevar un registro actualizado de vuestra colección personal e incluso estar al dia de las ultimas
                novedades del maravilloso mundo de la lectura. Muchas gracias y esperamos que disfruten de este "Best
                Celler" que es nuestra pagina, bienvenidos a TSUNDOKU.</p>
        </div>
    </div>
    {/* <div className="footer">
        <p>Esta aplicación esta hecha por Santi&copy;, Aco&copy; y Alexis&copy; con mucho esfuerzo y ganas de aprender <i
                className="fas fa-biohazard"></i></p>
        <p> <a href="mailto:santiagocarmelo.castellanohernandez_29#alumno.academiadf.com">Contacta con nosotros <i
                    className="fas fa-file-signature"></i></a> </p>
    </div> */}
</div>
)
}

export default Inicio