import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Registration from "./Registration";
import Home from "./Home";
import Welcome from "./welcome";
import Dashboard from "./Dashboard";
import Learnings from "./Learnings";
import Courses from "./Courses";
import Mylearning from "./mylearnings";







function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Registration" element={<Registration />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/learning/:id" element={<Learnings/>}/>
          <Route path="/mylearning" element={<Mylearning/>}/>
          <Route path="/learning" element={<Learnings/>}/>
          <Route path="/courses" element={<Courses/>}/>


        </Routes>
      </Router>
    </div>
  );
}

export default App;
