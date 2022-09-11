import "./App.css";
import Home from "./page/Home/Home";
import About from "./page/About/About";
import Profile from "./page/Profile/Profile";
import Skill from "./page/Skill/Skill";
import Navbar from "./components/navigation/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Skill" element={<Skill />} />
      </Routes>
    </>
  );
}

export default App;
