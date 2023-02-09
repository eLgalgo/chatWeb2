import "../style/style.css"
import {signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {auth} from '../firebase';

function Login() {

  const [err, setErr] = useState(false);
  console.log(auth);
  const navigate = useNavigate();
  const handleSubmit = async (e) =>{
      e.preventDefault()
        const email = e.target[0].value;
        const password = e.target[1].value;
        
        try{
           await signInWithEmailAndPassword(auth, email, password);
           navigate("/");
        }catch(err){
            setErr(true)
        }
    }
    return (
      <div className="loginDiv">
        <form onSubmit={handleSubmit}>
            <h1>Inicio de Sesion</h1>
            <input placeholder="Usuario" type="name" className="input" required/>
            <input placeholder="Contraseña" type="password" className="input" required/>
            <button >Iniciar Sesion</button>
            <p>¿No tienes cuenta? <a href="/register">Registrarse</a></p>
        </form>
      </div>
    );
  }
  
  export default Login;