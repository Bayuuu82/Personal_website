import "./navbar.css";
// import { Route, Routes } from "react-router-dom";
// import Home from "../../page/Home/Home";
// import About from "../../page/About/About";
// import Profile from "../../page/Profile/Profile";
// import Skill from "../../page/Skill/Skill";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  return (
    <>
      <div className="bar">
        <ul>
          <HashLink to="#">
            <li className="nav">Home</li>
          </HashLink>
          <HashLink to="#About">
            <li className="nav">About</li>
          </HashLink>
          <HashLink to="#Profile">
            <li className="nav">Profile</li>
          </HashLink>
          <HashLink to="#Skill">
            <li className="nav">Skill</li>
          </HashLink>
        </ul>
      </div>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Skill" element={<Skill />} />
      </Routes> */}
    </>
  );
}

export default Navbar;
