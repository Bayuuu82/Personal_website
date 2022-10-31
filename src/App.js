import "./App.css";
import Home from "./page/Home/Home";
import About from "./page/About/About";
import Profile from "./page/Profile/Profile";
import Skill from "./page/Skill/Skill";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Profile />
      <Skill />
      <Footer />
    </>
  );
}

export default App;
