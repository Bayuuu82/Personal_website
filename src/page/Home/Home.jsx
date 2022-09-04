import '../Assets/Pages.css'
import "./Home.css"
import gambar from '../Assets/pict/icon1.png'

function Home() {
  return (
    <>
      <div className="home center">
        <img className='gambarhome' src={gambar} alt="" />
        <div classname="tekshome">
          <h3>Welcome!</h3>
          <p>To my personal website</p>
          <br />
          <button>Let's See!</button>
        </div>
      </div>
    </>
  );
}

export default Home;
