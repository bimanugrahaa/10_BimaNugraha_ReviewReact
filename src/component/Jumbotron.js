import { Link } from "react-router-dom";
import profile from "../assets/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg";
import './home.css';
import Time from "./Time";

export default function Jumbotron() {
    return(
        <div className="jumbotron">
            <Time/>
            <div className="row">
                <div className="col-lg-5 col-12">
                <img className="profile" src={profile} alt=""/>
                </div>
                <div className="col-lg-7 col-12 profile-text">
                
                <h4 className="heading-4">Hi, my name is</h4>
                <h1 className="heading-1">Anne Sullivan</h1>
                <h3 className="heading-3">I build things for the web</h3>
                <Link to="/contact-us" role="button" id="btn-home" className="btn">Get In Touch</Link>
                {/* <a href="contact_us.html" role="button" id="btn-home" className="btn">Get In Touch</a> */}
                </div>
            </div>
        </div>
    )
}