import React,{useEffect} from 'react';
import Header from '../Header/Header.jsx';
import ComicCard from '../../components/card/ComicCard.jsx';
import './Galeria.css';
// import axios from "axios"
const Galeria = (props) => {
    //Variable que carga los props del get de comics desde App.js
    const listaComics = props.dataComics;
    const verComics = props.verComics;
    console.log(listaComics);
    const handlerLanzaListaComics = (()=>{
        props.onVerComics();
    });
    useEffect(()=>{handlerLanzaListaComics()},[]);
    return (
        <div className="me-2">
            <Header />
        <div id="fondo">
        <div id="aside">
            <div id="slider">
            </div>
            <div id="player">
            </div>
            <div id="contenido2">
                {listaComics.map((info)=>{
                return(
                    <ComicCard key={info._id} info={info} />
                );
                    })}

                </div>
            {/* <div id="busqueda">
                <form id="search-form">
                </form>
                <div className="input-group input-group-sm mb-3 ms-2 me-2 pt-2">
                    <div className="filtros me-2" id="filtro-editorial">
                        <select className="form-select form-select-sm" aria-label=".form-select-sm example"
                            name="f-editorial" id="f-editorial" form="search-form">
                            <option value="editorial1">Editorial 1</option>
                            <option value="editorial2">Editorial 2</option>
                            <option value="editorial3">Editorial 3</option>
                            <option value="editorial4">Editorial 4</option>
                            <option value="editorial5">Editorial 5</option>
                        </select>
                    </div>
                    <div className="filtros ms-2 me-2" id="filtro-categoria">
                        <select className="form-select form-select-sm" aria-label=".form-select-sm example"
                            name="f-editorial" id="f-editorial" form="search-form">
                            <option value="categoria1">Categoría 1</option>
                            <option value="categoria2">Categoría 2</option>
                            <option value="categoria3">Categoría 3</option>
                            <option value="categoria4">Categoría 4</option>
                            <option value="categoria5">Categoría 5</option>
                        </select>
                    </div>
                    <div className="filtros ms-2 me-2" id="filtro-genero">
                        <select className="form-select form-select-sm" aria-label=".form-select-sm example"
                            name="f-editorial" id="f-editorial" form="search-form">
                            <option value="genero1">Género 1</option>
                            <option value="genero2">Género 2</option>
                            <option value="genero3">Género 3</option>
                            <option value="genero4">Género 4</option>
                            <option value="genero5">Género 5</option>
                        </select>
                    </div>

                        <input className="form-control ms-2 me-2" type="number" name="old" id="f-old" min="1900"
                            max="2021" placeholder="Antigüedad"/>
                        <label for="f-old">Antigüedad</label>

                        <span className="input-group-text ms-2" id="basic-addon1"><a href="" type="submit" form="search-form"><i
                                    className="fas fa-search"></i></a></span>
                        <input type="text" className="form-control me2" name="buscar" id="input-search"
                            form="search-form" placeholder="Indica qué quieres buscar"
                            aria-label="Indica qué quieres buscar" aria-describedby="basic-addon1"/>
                    </div>
            </div> */}
            {/* <div id="galeria"> */}
                {/* <div className="cards n01">
                    <div type="button" className="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        +INFO
                    </div>
                </div>
                <div className="cards n02">

                </div>
                <div className="cards n03">

                </div>
                <div className="cards n04">

                </div>
                <div className="cards n01">
                    <div type="button" className="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        +INFO
                    </div>
                </div>
                <div className="cards n02">

                </div>
                <div className="cards n03">

                </div>
                <div className="cards n04">

                </div>
                <div className="cards n01">
                    <div type="button" className="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        +INFO
                    </div>
                </div>
                <div className="cards n02">

                </div>
                <div className="cards n03">

                </div>
                <div className="cards n04">

                </div>
                <div className="cards n01">
                    <div type="button" className="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        +INFO
                    </div>
                </div>
                <div className="cards n02">

                </div>
                <div className="cards n03">

                </div>
                <div className="cards n04">

                </div>
                <div className="cards n01">
                    <div type="button" className="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        +INFO
                    </div>
                </div>
                <div className="cards n02">

                </div>
                <div className="cards n03">

                </div>
                <div className="cards n04">

                </div> */}
            </div>

            {/* <div className="footer">
                <p>Esta aplicación esta hecha por Santi&copy;, Aco&copy; y Alexis&copy; con mucho esfuerzo y ganas de aprender <i
                        className="fas fa-biohazard"></i></p>
                <p> <a href="mailto:santiagocarmelo.c
                    astellanohernandez_29#alumno.academiadf.com">Contacta con nosotros
                        <i className="fas fa-file-signature"></i></a> </p>
            </div> */}
        {/* </div> */}
    </div>
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">LOS VENGADORES 01: LA HUESTE FINAL</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div>
                        <img src="https://cdn.normacomics.com/media/catalog/product/cache/1/image/588x473/9df78eab33525d08d6e5fb8d27136e95/v/e/vengadores_premiere.jpg"
                            alt="LOS VENGADORES 01: LA HUESTE FINAL" align="center"></img>
                    </div>
                    <div>
                        <ul>
                            <li>Autores: Ed McGuinness, Jason Aaron</li>
                            <li>Colecciones: MARVEL COMICS </li>
                            <li>Editoriales:Panini Comics </li>
                            <li>Series:MARVEL PREMIERE: LOS VENGADORES </li>
                            <li>Título original:FCBD The Avengers 2018 y The Avengers 1-6</li>
                        </ul>
                        <p>
                            ¡Un nuevo comienzo! ¡Un nuevo equipo! Con ""La Hueste final", el primer arco de la
                            alucinante etapa de Jason Aaron. Thor, Iron Man y el Capitán América están unidos de nuevo,
                            y deberán convocar a un equipo capaz de hacer frente al regreso a la Tierra de un Celestial
                            furioso.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous">
    </script>
        </div>
    )
}

export default Galeria
