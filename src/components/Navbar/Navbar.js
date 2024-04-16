import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Login from "../Auth/Login";
import Signup from "../Auth/Signup";

// const connectWallet = async () => {
//   if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
//     try {
//       /* Metamask is installed*/
//       const accounts = await window.ethereum.request({
//         method: "eth_requestAccounts",
//       });
//       console.log(accounts[0]);
//     } catch (error) {
//       console.log(error.message);
//     }
//   } else {
//     console.log("PLease install metamask");
//   }
// };

export default function Navbar() {
  return(
  <>
      <header className="header">
        <nav className="nav container">
          <Link to="/" className="nav__logo">
            BlockSafe Banking
          </Link>

          <div className={`nav__menu show-menu`} id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <Link to="/" className="nav__link">
                  Home
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/Transaction" className="nav__link">
                 Transaction
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/History" className="nav__link">
                  History
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/about-us" className="nav__link">
                  About Us
                </Link>
              </li>
              <li className="nav__item">
                  <Link
                    to="/login"
                    className="nav__link nav__cta"
                  >
                    Login
                  </Link>
              </li>
              <li className="nav__item">
                  <Link
                    to="/signup"
                    className="nav__link nav__cta"
                  >
                    Signup
                  </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
