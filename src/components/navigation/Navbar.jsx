import './navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
        <div className="bar">
            <ul>
                <Link to='/'><li className='nav'>Home</li></Link>
                <Link to='/About'><li className='nav'>About</li></Link>
                <Link to='/Profile'><li className='nav'>Profile</li></Link>
                <Link to='/Blog'><li className='nav'>Blog</li></Link>
                <Link to='/Skill'><li className='nav'>Skill</li></Link>
            </ul>
        </div>
        </>
    )
}

export default Navbar;