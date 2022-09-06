import React from 'react'
import { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function Login() {

    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate('/');
            })
            .catch(() => {
                setError(true);
            });
    }

    return (
        <div className='login'>
            <form className='login-cnt' onSubmit={handleLogin}>
                <h1>Log in</h1>
                <input type="text" placeholder='email...' onChange={(e) => { setEmail(e.target.value) }}></input>
                <input type="password" placeholder='password...' onChange={(e) => { setPassword(e.target.value) }}></input>
                <button type='submit'>SUBMIT</button>
            </form>
            {
                error && <p style={{ color: "rgb(255, 100, 100)", fontSize: "20px", marginTop: "10px" }}>Wrong email or password...</p>
            }
        </div>
    )
}

export default Login