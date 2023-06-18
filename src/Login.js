import { Link, useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import Dashboard from "./Dashboard";
 

 export const Context=React.createContext()

function Login() {

  const [email,setEmail]=useState("") 
  const [password,setPassword]=useState("")
 
  
  const firebaseConfig = {
    apiKey: "AIzaSyAC9I_aBA5qZMzQ6Sjq7Tm9IpRwpIgFy-8",
    authDomain: "trainingportal-2637c.firebaseapp.com",
    projectId: "trainingportal-2637c",
    storageBucket: "trainingportal-2637c.appspot.com",
    messagingSenderId: "747598262424",
    appId: "1:747598262424:web:73f36e7a5f9ca3a7d7a0ed",
  };

  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);
  const naviate=useNavigate()

  const signin=(e)=>{
    e.preventDefault()
    signInWithEmailAndPassword(auth,email,password)
    .then(()=>{
         naviate("/welcome")
    })
    .catch(()=>{
      alert("User Not Found Please Register")
    })
  }
  return (
    <div>
      <Context.Provider value={email}>

    
      <nav
        className="navbar navbar-expand-lg text-white "
        style={{ backgroundColor: "#0b5394" }}
      >
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand text-white">
            Training Portal
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link text-white">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/Registration"} className="nav-link text-white">
                  Signup Free
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav aria-label="breadcrumb" style={{ backgroundColor: "#98B4D4" }}>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <Link to={"/"}>Home</Link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Login
          </li>
        </ol>
      </nav>
      <form onSubmit={signin}>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <p>
          Don't have Account? <Link to={"/Registration"}>Register Here</Link>
        </p>
        <button type="submit" className="btn btn-primary">
          Login
        </button>

      </form>
      </Context.Provider>
    </div>
  );
}

export default Login;
