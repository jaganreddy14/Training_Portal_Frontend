import { Link, useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";


export default function Courses() {
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
  const [value, setValue] = useState(null);


  const logout = (e) => {
    e.preventDefault();
    signOut(auth).then(() => {
      navigate("/");
    });
  };

  useEffect(() => {
    fetch("http://localhost:3006/cources")
      .then((resp) => {
        return resp.json();
      })
      .then((res) => {
        setData(res);
      });
  }, []);

  const enroll = (id) => {
     navigate("/learning/"+id)
  };

  const search = async (e) => {
    e.preventDefault();
    return await axios
      .get(`http://localhost:3006/cources?q=${value}`)
      .then((res) => {
        setData(res.data);
      });
  };

  const clearsearch = (e) => {
    e.preventDefault();
    fetch("http://localhost:3006/cources")
      .then((resp) => {
        return resp.json();
      })
      .then((res) => {
        setValue("");
        setData(res);
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
              <a className="nav-link text-white" onClick={logout} href="">
                Logout
              </a>
            </li>
          </ul>
          <form class="d-flex " id="search" onSubmit={search}>
            <input
              class="form-control me-2"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-success" type="submit">
              Search
            </button>
            <button class="btn btn-danger" onClick={clearsearch}>
              clear
            </button>
          </form>
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
                <a href="" className="btn btn-primary" onClick={()=>{enroll(items.id)}}>
                  ShowDetails
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
