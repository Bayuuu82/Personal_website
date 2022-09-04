import gambar from "../Assets/pict/foto1.jpg";
import "./About.css";
import "../Assets/Pages.css";

function About() {
  return (
    <>
      <div className="center about">
        <img className="gambar" src={gambar} alt="" />
        <div className="textabout">
          <br />
          <h1>Hi, i'm Bayu</h1>
          <p>Pengen jadi Programer</p>
          <br />
          <p>
            Nama saya <b>Bayu Fajrin</b>, saya pemuda bugis tampan yang berasal dari Sumbawa. Saya merpakan mahasiswa semester akhir Universitas Teknologi Sumbawa di jurusan Informatika. Sekarang saya mengikuti Bootcamp program AMMAN Coding
            Program Batch 3 yang berkolaborasi dengan Skilvul
          </p>
        </div>
      </div>
    </>
  );
}
export default About;
