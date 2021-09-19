import { useState, useEffect } from "react"
import './time.css'

export default function Time() {

    // const locale = "id"
    // let date = new Date()
    let tick = new Date().toLocaleTimeString()
    // let today = date.toString().substring(0,3)
    // let dates = date.toString().substring(4,15)
    let today = new Date().toLocaleDateString()
    // let a = date.toLocaleString()
    // let today = date.toString().split(" ", 4)
    // console.log(a)
    // console.log(a)
    // const tick = {
    //     day: "",
    //     month: "",
    //     dateDay: "",
    //     year: "",
    //     hour: "",
    // }

    const [date, setDate] = useState(today)
    const [timer, setTimer] = useState(tick)

    useEffect(() => {
        // const abortControleer = new AbortController();
        setInterval(() => {
            let ticks = new Date().toLocaleTimeString();
            let todays = new Date().toLocaleDateString();
            setTimer(ticks)
            setDate(todays)
        }, 1000);

        // return function cleanup() {
        //     setTimer(tick)
        //     setDate(today)
        //     abortControleer.abort();
        // }
        
    })

    return(
        <div className="container-fluid card-time mx-auto" >
            {/* <div className="card card-time"> */}
                <h5>Today</h5>
                <small>{date}</small>
                <h4>{timer}</h4>
            {/* </div> */}
            
            {/* <h1>{date.toString().substring(0,15)}</h1> */}
        </div>
    )
    // style={{marginTop:"80px", height:"fit-content", width:"100%"}}
}