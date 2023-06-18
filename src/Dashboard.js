import { Link, useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { useEffect, useState } from "react";


export default function Dashboard() {

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

  const [data,setData]=useState(null) 
  const logout = (e) => {
    e.preventDefault();
    signOut(auth).then(() => {
      navigate("/");
    });
  };

  useEffect(()=>{
     fetch("http://localhost:3006/users")
     .then((res)=>{
            return res.json()
     })
     .then((resp)=>{
           setData(resp)
     })
  },[])
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
        </div>
      </nav>

      <div class="container">
        <div class="row">
          <div class="col-md-4 p-2">
            {data?.map((item)=>( 
            <div class="card">
              <div class="card-body text-center">
                <img
                  src="images/download.png"
                  class="img-fluid rounded-circle mb-3"
                  alt="Profile Picture"
                />
                <h4 class="card-title">{item.name}</h4>
                <p class="card-text">Software Engineer</p>
              </div>
            </div>
            ))}
          </div>
          <div class="col-md-8 p-2">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Personal Information</h5>
                <p>Name:Jagan Reddy</p>
                <p>Age: 25</p>
                <p>Gender: Male</p>
                <p>Email:Jaganreddy809@gmail.com</p>
                <p>Phone: 123-456-7890</p>
              </div>
            </div>
            <div class="card mt-4">
              <div class="card-body">
                <h5 class="card-title">About Me</h5>
                <p>
                Having 1.6 years experience in software development  
                Looking for a long-term association with a company having a 
                dynamic working environment where my skills could be shared and to grow in the hierarchy of the company
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
