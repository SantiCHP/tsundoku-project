import React from 'react'
import "./Coleccion.css"
import './Coleccion.css'


const Coleccion = () => {
    return (
        <div>
                <div id="contenido2">
                <div className="cards n01">
                    <div type="button" className="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        +INFO
                    </div>
                    <div type="button" className="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fas fa-heart"></i>
                    </div>
                    <div type="button" className="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fas fa-award"></i>
                    </div>
                </div>
                <div className="cards n02">

                </div>
                <div className="cards n03">

                </div>
                <div className="cards n04">

                </div>
                </div>
        </div>
    )
}

export default Coleccion
