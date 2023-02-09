import "../style/style.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";


function Register(){

    const [err, setErr] = useState(false);
    const navigate = useNavigate()
    const handleSubmit = async (e) =>{
        e.preventDefault()
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        try{
            const res = await createUserWithEmailAndPassword(auth, email, password)
            navigate('/login')
            await updateProfile(res.user,{
                displayName
            })
            await setDoc(doc(db, "users", res.user.uid),{
                uid: res.user.uid,
                displayName,
                email
            })
            await setDoc(doc(db, "usersChats", res.user.uid));
        }catch(err){
            setErr(true)
        }
    };

    return(
        <div>
            <div className="loginDiv">
                <form onSubmit={handleSubmit}>
                    <h1>Registro de Usuario</h1>
                    <input placeholder="Usuario" type="name" className="input" required/>
                    <input placeholder="Email" type="email" className="input" required/>
                    <input placeholder="Contraseña" type="password" className="input" required/>
                    <button>Registrarse</button>
                    <p>¿Ya tienes cuenta? <a href="/login">Inicia Sesion</a></p>
                </form>
            </div>
        </div>
    );
}

export default Register;