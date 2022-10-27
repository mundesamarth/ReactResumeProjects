import React , {useState} from "react";
import { Link , useHistory } from "react-router-dom";
import "./Login.css";
import {auth} from "./firebase.js"
function Login() {
    const histroy = useHistory()
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
    }

    const register = e =>{
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            console.log(auth);
            if (auth){
              histroy.push('/');
            }
        })
        .catch(error => alert(error.message))
    }
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>SIGN-IN</h1>
        <form>
          <h5>Email</h5>
          <input type="email" value={email} onChange = 
          {e => setEmail(e.target.value)}/>

          <h5>Password</h5>
          <input type="password" value={password} onChange = 
          {e => setPassword(e.target.value)}/>

          <button 
          className="login__signInButton"
          type="submit"
          onClick={signIn}>Sign-in</button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button className='login__registerButton'
        onClick={register}>
          Create your Amazon Account</button>
      </div>
    </div>
  );
}

export default Login;
