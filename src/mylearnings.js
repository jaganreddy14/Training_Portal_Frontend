
import { Link, useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";

export default function Mylearning() {
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
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://training-portal-server.onrender.com/Trainings")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setData(resp);
      });
  }, []);

  const Logout = (e) => {
    e.preventDefault();
    signOut(auth).then(() => {
      navigate("/");
    });
  };

  const deletecourse = (id) => {
    fetch("https://training-portal-server.onrender.com/Trainings" + id, {
      method: "DELETE",
    });
  };
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg "
        style={{ backgroundColor: "#0b5394" }}
      >
        <Link className="navbar-brand text-white" to={"/welcome"}>
          Training Portal
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link text-white" to={"/dashboard"}>
                Dashboard
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to={"/mylearning"}>
                MyLearnings
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to={"/courses"}>
                Courses
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" onClick={Logout} href="">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container">
        <div className="row p-2">
          <div className="col card" id="card">
            {data?.map((items) => (
              <div className="card-body">
                <h5 className="card-title">Course:{items.title}</h5>
                <h5 className="card-title">Trainer:{items.Trainer}</h5>
                <h5 className="card-title">Duration:{items.Duration}</h5>
                <h5 className="card-title">Price:{items.Cost}</h5>
                <p className="card-text">{items.discription}</p>
                <a href="" className="btn btn-danger" onClick={()=>{deletecourse(items.id)}}>
                  Remove
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
