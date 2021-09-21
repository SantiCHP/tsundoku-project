import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Header from "./pages/Header/Header.jsx";
import Inicio from "./pages/Inicio/Inicio.jsx";
import Galeria from "./pages/Galeria/Galeria.jsx";
import Coleccion from "./pages/Coleccion/Coleccion.jsx";
import Footer from "./pages/Footer/Footer.jsx";
import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
    // Variable para los comics
    const [comics, setComics] = useState([]);
    const verComics = async() => {
            axios.get("http://tsundoku-application.herokuapp.com/api/tsundoku/comics/")
                .then((response) => {
                    console.log(response.data.comics);
                    setComics(response.data.comics);
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        // UseEffect para que se realice la peticion solo una vez
    useEffect(() => { verComics() }, []);

    return (
			<div className="App">
				<Router>
					<div className="header">
						<Header />
					</div>{" "}
					<Switch>
						<Route exact path="/tsundoku/inicio">
							<Inicio />
						</Route>{" "}
						<Route exact path="/tsundoku/galeria" >
							<Galeria key={comics._id} dataComics={comics} onVerComics={verComics}/>
						</Route>{" "}
						<Route exact path="/tsundoku/coleccion">
							<Coleccion />
						</Route>{" "}
						<Redirect to="/tsundoku/inicio" />
					</Switch>{" "}
					<Footer />
				</Router>{" "}
			</div>
		);
}

export default App;