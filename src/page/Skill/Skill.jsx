import "../Assets/Pages.css";
import "./Skill.css";
import html from "../Assets/pict/html.png";
import css from "../Assets/pict/css.png";
import js from "../Assets/pict/js.png";
import rct from "../Assets/pict/react.png";
import gns from "../Assets/pict/gns3.png";
import mikrotik from "../Assets/pict/mikrotik.png";

function Skill() {
  return (
    <>
      <div className="center skillcontainer" id="Skill">
        <h1>Skill</h1>
        <div className="skillcard">
          <div className="card">
            <img className="skillfoto" src={html} alt="" />
            <h4 className="text">HTML</h4>
          </div>
          <div className="card">
            <img className="skillfoto" src={css} alt="" />
            <h4 className="text">CSS</h4>
          </div>
          <div className="card">
            <img className="skillfoto" src={js} alt="" />
            <h4 className="text">Java Script</h4>
          </div>
          <div className="card">
            <img className="skillfoto" src={rct} alt="" />
            <h4 className="text">React JS</h4>
          </div>
          <div className="card">
            <img className="skillfoto" src={mikrotik} alt="" />
            <h4 className="text">Mikrotik</h4>
          </div>
          <div className="card">
            <img className="skillfoto" src={gns} alt="" />
            <h4 className="text">Gns3</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skill;
