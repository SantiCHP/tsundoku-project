import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./pages/Header/Header.jsx";
import Inicio from "./pages/Inicio/Inicio.jsx";
import Galeria from "./pages/Galeria/Galeria.jsx";
import Registrarse from "./pages/Registrarse/Registrarse";
import Coleccion from "./pages/Coleccion/Coleccion.jsx";
import Footer from "./pages/Footer/Footer.jsx";
import Login from "./pages/Login/Login.jsx";
import './App.css';

function App() {

    // Define en una variable booleana si el usuario tiene o no acceso
    const [tieneAcceso, setTieneAcceso] = useState(false);
    // define los datos del acceso del usuario (nombre,email,password)
    const [datos, setDatos] = useState({});
    // Obtiene el token del usuario si se ha logueado correctamente
    const [token, setToken] = useState();
    // Traemos desde el componente Login los datos del usuario enviados desde el servidor mediante esta función prop
    const gestionarAcceso = (dato) => {
        setDatos(dato); // datos del usuario: email, password y token
        setTieneAcceso(true); // La variable que indica que está logueado se pone a true
        setToken(dato.token); // Por si fuera necesario
        // Para que persista el token y no se borre al recargar la pagina lo guardamos en formato texto en el localstorage
        localStorage.setItem(
            'userData',
            JSON.stringify({ idUsuario: dato.idUsuario, token: dato.token })
        );
    };
    // Variable para los comics
    const [comics, setComics] = useState([]);
    const verComics = async() => {
            axios.get("REACT_APP_BACKEND_URL" + "/api/tsundoku/comics/")
                .then((response) => {
                    console.log(response.data.comics);
                    setComics(response.data.comics);
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        // Cada vez que se recarga la pagina se renderiza el componente y se leen los datos
    useEffect(() => {
        const datosRecuperar = JSON.parse(localStorage.getItem('userData'));
        if (datosRecuperar && datosRecuperar.token) {
            setToken(datosRecuperar.token);
        }
        console.log(datosRecuperar);
    }, []);
    // UseEffect para que se realice la peticion solo una vez
    useEffect(() => { verComics() }, []);
    return (
			<div className="App">
				<Router>
					<Switch>
						<Route exact path="/tsundoku/">
							<Login gestionarAcceso={gestionarAcceso} />
						</Route>
						<Route exact path="/tsundoku/alta">
							<Registrarse gestionarAcceso={gestionarAcceso} />
						</Route>
						<Route exact path="/tsundoku/inicio">
							<Inicio />
						</Route>
						<Route exact path="/tsundoku/galeria">
							<Galeria
								key={comics._id}
								dataComics={comics}
								onVerComics={verComics}
							/>
						</Route>
						<Route exact path="/tsundoku/coleccion">
							<Coleccion />
						</Route>
						<Redirect to="/tsundoku/inicio" />
					</Switch>
					{/* <Footer /> */}
				</Router>
			</div>
		);
}

export default App;