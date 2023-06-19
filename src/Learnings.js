import { Link, useNavigate, useParams } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

export default function Learnings() {
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

  const [data,setData] = useState(null);
  const {id}=useParams()

  useEffect(() => {
    fetch("https://training-portal-server.onrender.com/cources"+id)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setData(resp);
      });
  }, []);

  const mylearnings =()=>{
    fetch("https://training-portal-server.onrender.com/Trainings",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(data)
    }).then(()=>{
        alert("Enrolled Sucessfully")
        navigate("/mylearnings")
    })
  }

  const back=()=>{
     navigate("/courses")
  }
  const logout = (e) => {
    e.preventDefault();
    signOut(auth).then(() => {
      navigate("/");
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
        </div>
      </nav>
      <div className="container-fluid">
      <div className="col card" id="card">         
          {data &&
              <div className="card-body">
                <h5 className="card-title">Course:{data.title}</h5>
                <h5 className="card-title">Trainer:{data.trainer}</h5>
                <h5 className="card-title">Duration:{data.duration}</h5>
                <h5 className="card-title">Discription:{data.discription}</h5>
                <h5 className="card-title">Price:{data.price}</h5>
                <a href="" className="btn btn-primary" onClick={mylearnings}>
                  Enroll
                </a>
                <a href="" className="btn btn-danger" onClick={back} >
                  Back
                </a>
              </div>
          }
          </div>
      </div>
    </div>
  );
}
