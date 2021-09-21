import React,{useState} from 'react';
import {Router,Redirect,Link} from "react-router-dom";
// Para los formularios
import { useForm } from 'react-hook-form';
// Para las peticiones
import axios from "axios";
// Importamos useHistory para manejar las redirecciones de las funciones cuando el usuario se registra o entra
import { useHistory } from 'react-router';
// CSS
import "./Registrarse.css";

const Registrarse = (props) => {
// función que usamos para pasar los datos del servidor a la App principal
const { gestionarAcceso } = props; 
// Constante para poder usar el useHistory
const history = useHistory();
// variable de estado que indica si el usuario existe o no en la base de datos.
const [tieneAcceso, setTieneAcceso] = useState(false); 
const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
} = useForm(); // hook del formulario para 'react-hook-form'
	// Constante para los errores de la peticion
	const[errorForm,setErrorForm] = useState("");
    const onSubmit = async (data) => {
		// Envío de los datos del formulario ( data ) al servidor
		console.log(data);
			await axios
				.post('REACT_APP_BACKEND_URL'+'/api/tsundoku/usuarios/alta', {
                    nombre:data.nombre,
					email: data.email,
					password: data.password,
				})
				.then((response) => {
					console.log('Registro Correcto');
                    // enviamos a la App la respuesta del servidor, que contiene el token creado por este
					gestionarAcceso(response.data);
					history.push("/tsundoku/");
				})
				.catch((error) => {
					console.log(error);
					setErrorForm(error.response.data.mensaje);	
				});
	};
    return (
      <div className="divLogin">
        <div className="formLogin">
          <h2 className="reg-title">Registrarse</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="input-reg"
              type="text"
              placeholder="Nombre"
              {...register("nombre", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.nombre && errors.nombre.type === "required" && (
              <span>Se requiere nombre de Usuario</span>
            )}
            <input
              className="input-reg"
              type="text"
              placeholder="Email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && errors.email.type === "required" && (
              <span>Se requiere e-mail válido</span>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <span>Se requiere e-mail válido</span>
            )}
            <input
              className="input-reg"
              type="password"
              placeholder="Password"
              {...register("password", { required: true, minLength: 8 })}
            />
            {errors.password && errors.password.type === "required" && (
              <span>Se requiere contraseña</span>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <span>Mínimo de 8 caracteres</span>
            )}
            <div className="botonesForm">
              <button className="btn-reg" type="submit">Registrarse</button>
              <button className="btn-reg"><Link to="/tsundoku/" className="enlace"/>Cancelar</button>
            </div>
          </form>
          {errorForm != "" ? <div>{errorForm}</div> : null}
        </div>
        <div className="circle1"></div>
        <div className="circle2"></div>
      </div>
    );
}

export default Registrarse
