import React from 'react';
// import bootstrap from 'bootstrap';
import './ComicCard.css';

const ComicCard = (props) => {
const info = props.info;
console.log(info);
// const cardData = props.





return (
<div className="contenedor">
    <div className="card">
        <div className="imgBox">
            <img src={info.caratula} />
            <img src={info.caratula} />
        </div>
        <div className="details">
            <div className="content">
                <h6><strong>{info.titulo}</strong></h6>
                <h6><strong>Autor: </strong>{info.autor}</h6>
                <p><strong>Colección: </strong>{info.coleccion}</p>
                <p><strong>Editorial: </strong>{info.editorial}</p>
                <p><strong>Serie: </strong>{info.serie}</p>
                <div className="descripcion">
                    <p><strong>Descripción: </strong>{info.descripcion}</p>
                </div>
            <div className="botones">
                <div type="button" className="boton"><i className="fas fa-heart"></i></div>
                <div type="button" className="boton"><i className="fas fa-award"></i></div>
            </div>
            </div>
        </div>
    </div>
</div>

)
}

export default ComicCard