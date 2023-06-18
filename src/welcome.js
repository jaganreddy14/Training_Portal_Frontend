import { Link, useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";

function Welcome() {
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
              <Link className="nav-link text-white" to={"/mylearning"}>
                MyLearnings
              </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link text-white" to={"/courses"}>Courses</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" onClick={logout} href="">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <img src="images/welcome.jpg" alt="" style={{width:"100%"}}/>
      <img src="images/welcome2.jpg" alt="" style={{width:"100%"}}/>
    </div>
  );
}

export default Welcome;
