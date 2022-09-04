import "./Profile.css";
import "../Assets/Pages.css";
import gambar from "../Assets/pict/foto2.png";

function Profile() {
  return (
    <>
      <div className="center profile">
        <img className="fotoprofile" src={gambar} alt="" />
        <div class="teksprofile">
          <h1>Profile</h1>
          <p>
            Lahir tahun 2002, di Sumbawa, Nusa Tenggara Barat.
            <br />
            Pendidikan terakhir SMKN 1 Tarano, jurusan Teknik Komputer dan Jaringan.
            Sekarang berkuliah di Universitas Teknologi Sumbawa, mengambil jurusan Informatika.
            <br />
            My last work experience, sebagai Volunteer di event internasional MXGP SAMOTA SUMBAWA.
          </p>
        </div>
      </div>
    </>
  );
}

export default Profile;
