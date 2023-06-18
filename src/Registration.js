import { useState } from "react";
import { Link } from "react-router-dom";
import { initializeApp } from "firebase/app";
import Swal from "sweetalert2";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import Dashboard from "./Dashboard";

function Registration() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatpass, setRepeatpass] = useState("");



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

  const createUser = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
           Swal.fire(
            'Good job!',
            'Your Account Has been Created',
            'success'
           )
        })
      .catch((err) => {
        alert("Error:" + err);
      });
  };

  return (
    <div>
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
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Registration
          </li>
        </ol>
      </nav>
      <form onSubmit={createUser}>
        <div className="form-group">
          <label>UserName</label>
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter UserName"
            required
          />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="form-control"
            placeholder="Password"
            required
          />
        </div>
        <div className="form-group">
          <label>ConfirmPassword</label>
          <input
            type="password"
            value={repeatpass}
            onChange={(e) => {
              setRepeatpass(e.target.value);
            }}
            className="form-control"
            placeholder="Repeat-Password"
            required
          />
        </div>
        <p>
          Already have Account? <Link to={"/login"}>Login Here</Link>
        </p>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
        <Link to={"/"}  className="btn btn-danger"> Back</Link>
      </form>
      <Dashboard username={username}/>
    </div>
  );
}

export default Registration;
