import { Link, NavLink } from "react-router-dom";
import logo from "../assets/img/logo-ALTA.png";
import './home.css';

export default function Header(){

    return(
        <header className="navbar fixed-top shadow-lg d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom">
            <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                <img className="logo" src={logo} alt=""/>
            </a>
            <label className="hamburger" htmlFor="hamburger">&#9776;</label>
            <input type="checkbox" id="hamburger"/>    
            <ul id="items" className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><a href="/" className="nav-link px-3 link-home">HOME</a></li>
                <li><a href="/" className="nav-link px-3 link-dark">ABOUT</a></li>
                <li><a href="/" className="nav-link px-3 link-dark">EXPERIENCES</a></li>
                <li><a href="/" className="nav-link px-3 link-dark">CONTACT</a></li>
                <li><Link className="nav-link px-3 link-dark" to="/news">NEWS</Link></li>
            </ul>
        </header>
    )
}