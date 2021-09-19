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
                <li><NavLink to="/" className="nav-link px-3 link-home">HOME</NavLink></li>
                <li><NavLink to="/about" className="nav-link px-3 link-dark">ABOUT</NavLink></li>
                <li><NavLink to="/experiences" className="nav-link px-3 link-dark">EXPERIENCES</NavLink></li>
                <li><NavLink to="/contact" className="nav-link px-3 link-dark">CONTACT</NavLink></li>
                <li><NavLink to="/news" className="nav-link px-3 link-dark" >NEWS</NavLink></li>
            </ul>
        </header>
    )
}