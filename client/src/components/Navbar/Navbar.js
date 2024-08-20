import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { doSignOut } from '../../firebase/auth'
import { useAuth } from "../contexts/authContext"

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate()
  const { userLoggedIn } = useAuth()
  
  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo">
          BlockSafe Banking
        </Link>

        <div
          className={`nav__menu  show-menu`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/" className="nav__link">
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/transaction"
                className="nav__link"
              >
                Transaction
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/about-us"
                className="nav__link"
              >
                About us
              </Link>
            </li>
            {
                userLoggedIn
                    ?
                    <>
                         <li className="nav__item"><button  className="nav__link nav__cta" onClick={() => { doSignOut().then(() => { navigate('/login') }) }}>Logout</button></li>
                    </>
                    :
                    <>
                        <li className="nav__item"><Link className='nav__link nav__cta' to={'/login'}>Login</Link></li>
                        <li className="nav__item"><Link className='nav__link nav__cta' to={'/signup'}>Signup</Link></li>
                    </>
            }
            
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;