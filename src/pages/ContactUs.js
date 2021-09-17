import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateMessage } from "../store/DataSlice";
import logo from "../assets/img/logo-ALTA-v2@2x.png";
import './contactUs.css';
import NewsList from "../component/NewsList";

export default function ContactUs() {

    const history = useHistory();
    const goReviewMessage = () => {
        history.replace("/review-message")
    }

    const baseData = {
        
        name: "",
        mail: "",
        phone: "",
        nationality: "-",
        message: ""
        
    }

    const baseError = {

        name: "",
        mail : "",
        phone: ""
    }

    const dispatch = useDispatch()

    const [data, setData] = useState(baseData)
    const [err, setErr] = useState(baseError)

    const regexName = /^[A-Za-z ]*$/;
    const regexMail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    const handleInput = e => {
        const name = e.target.name;
        const value = e.target.value;
        let errName =  err.name;
        let errHp = err.phone;
        let errMail = err.mail;

        if (name === "name") {
            if(value === "") {
                errName = "Full name cannot be empty!"
            } else if (regexName.test(value)) {
                errName = ""
            } else {
                errName = "Full name only alphabet!"
            } 
            setErr({...err, [name]: errName})
        }

        if (name === "phone") {
            if (value.length === 0){
                errHp = "Phone number cannot be empty!"
            }
            else if (value.length >= 9 && value.length <= 14) {
                errHp = ""
            } else if (value.length < 9 || value.length > 14) {
                errHp = "Phone number contains 9 - 14 number!"
            }  
            console.log(value.length)
            console.log(errHp)
            setErr({...err, [name]: errHp})
        }

        if (name === "mail"){
            if (value === "") {
                errMail = "Mail cannot be empty!"
            } else if (!(regexMail.test(value))) {
                errMail = "Mail is invalid!"
            } else if (regexMail.test(value)) {
                errMail = ""
            }

            console.log(regexMail.test(value))
            setErr({...err, [name]: errMail})
        }

        setData({...data, [name]: value})
        console.log("data", data)
        // setData({...data, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        // e.preventDefault()
        const newData = {
            name: data.name,
            mail: data.mail,
            phone: data.phone,
            nationality: data.nationality,
            message: data.message
        }

        console.log(data.name)
        dispatch(updateMessage(newData))
        goReviewMessage()
         
    }
    
    return (
        <div className="container-fluid px-0">
            <div className="row">
                <div className="col-md-5 col-sm-4">
                    <div className="left-image">
                        <img className="alterra-logo mx-auto d-block" src={logo} alt=""/>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="data-container col-md-7 col-sm-8">
                    <p>Contact Us</p>
                    {/* <NewsList/> */}
                    <div className="row g-3">
                        <div className="contact-form">
                            <label htmlFor="validationDefault01" className="form-label my-1">Full name<span>*</span></label>
                            <input name='name' value={data.name} onChange={handleInput} type="text" className="form-control" id="validationDefault01" placeholder="Your full name here" required/>
                            <span className="error-msg">{err.name}</span><br/>
                            {/* <div className="is-invalid">Full name cannot be empty</div> */}
                        </div>
                        <div className="contact-form mt-0">
                            <label htmlFor="validationDefault02" className="form-label my-1">Email Address<span>*</span></label>
                            <input name='mail' value={data.mail} onChange={handleInput} type="email" className="form-control" id="validationDefault02" placeholder="example@domain.com" required/>
                            <span className="error-msg">{err.mail}</span><br/>
                            {/* <div className="is-invalid">Email address cannot be empty</div> */}
                        </div>
                        <div className="contact-form mt-0">
                            <label htmlFor="validationDefault03" className="form-label my-1">Phone Number<span>*</span></label>
                            <input name='phone' value={data.phone} onChange={handleInput} type="number" className="form-control" id="validationDefault03"  placeholder="08573890xxxxx" required/>
                            <span className="error-msg">{err.phone}</span><br/>
                            {/* <div className="is-invalid">Phone number cannot be empty</div> */}
                        </div>
                        <div className="contact-form mt-0">
                            <label htmlFor="validationDefault04" className="form-label my-1">Nationality</label>
                            <select name="nationality" value={data.nationality} onChange={handleInput} className="form-select btn-sm" id="validationDefault04">
                                <option selected hidden value="">Selected</option>
                                <option>Indonesian</option>
                                <option>Australian</option>
                                <option>German</option>
                                <option>Japanese</option>
                                <option>Italian</option>
                                <option>Malaysian</option>
                                <option>British</option>
                                <option>Thai</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className="contact-form mt-4">
                            <label htmlFor="validationDefault05" className="form-label my-1">Message</label>
                            <textarea name="message" value={data.message} onChange={handleInput} type="text" className="form-control text-area" id="validationDefault05" placeholder="Your full name here"></textarea>
                        </div>
                        <div className="col-12">
                            {/* <button onClick={() => goReviewMessage()} className="btn btn-contact" type="submit">Submit</button> */}
                            <button className="btn btn-contact" type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}