import { useSelector, useDispatch } from 'react-redux';
import './reviewMessage.css'
import logo from '../assets/img/img-dot.png'
import Time from '../component/Time';

export default function ReviewMessage(){
    const message = useSelector((state) => state.data.data)
    const dispatch = useDispatch()
    console.log(message)

    // const locale = "id"
    // let date = new Date()
    // let utc = date.toLocaleDateString(locale,  { hour: 'numeric', minute: 'numeric', second: 'numeric' })
    // let tick = date.toString(locale).split(" ", 5)
    // console.log(date)
    // console.log(utc)
    // console.log(tick)

    return(
        <>
        <Time/>
        <div className="container-fluid background-message">
        <div className="container dot-container">
                <div className="dot-div">
                    <img className="dot" src={logo} alt=""/>
                </div>
            </div>
            <div className="card-container container px-4 py-5 border border-2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-4">Full Name</div>
                        <div className="col-md-auto col-auto">:</div>
                        <div className="col-md-8 col-7">{message.name}</div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-4">Email Address</div>
                        <div className="col-md-auto col-auto">:</div>
                        <div className="col-md-8 col-7">{message.mail}</div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-4">Phone Number</div>
                        <div className="col-md-auto col-auto">:</div>
                        <div className="col-md-8 col-7">{message.phone}</div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-4">Nationality</div>
                        <div className="col-md-auto col-auto">:</div>
                        <div className="col-md-8 col-7">{message.nationality}</div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12 message">{message.message}</div>
                    </div>
                    <div className="border-top mx-auto"></div>
                    <div className="row mt-5">
                        <span className="closing-1">Thanks for contacting us!</span>
                        <span className="closing-2">We will be in touch with you shortly.</span>
                        <a href="/" className="btn btn-message" type="submit">Home</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-auto footer-message"></div>
        </>
    )
}