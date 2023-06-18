import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{backgroundColor:"#0b5394"}}>
      <nav
        className="navbar navbar-expand-lg text-white "
        style={{ backgroundColor: "#0b5394" }}
      >
        <div className="container-fluid">
        <Link to={"/"} className="navbar-brand text-white">Training Portal</Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                 <Link to={"/login"} className="nav-link text-white">Login</Link>
              </li>
              <li className="nav-item">
                 <Link to={"/Registration"} className="nav-link text-white">Signup Free</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <h1 className='text-center text-white' >
        There's a better way to train
      </h1><br/>
      <h5  className='text-center text-white'>
      Deliver the learning experience your team deserves.
      </h5>
      <h5  className='text-center text-white'>
      No brainstorm, research, or strike of inspiration necessary.
      </h5>

      <img src="images/training portal home.png" style={{width:"100%"}} alt=""/>
      <img src="images/Screenshot 2023-06-15 144158.png" style={{width:"100%"}} alt=""/>
    </div>
  );
}

export default Home
