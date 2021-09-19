import { useState, useEffect } from "react"
import './time.css'

export default function Time() {

    let tick = new Date().toLocaleTimeString() //timer initial value
    let today = new Date().toLocaleDateString() //date initial value

    const [date, setDate] = useState(today)
    const [timer, setTimer] = useState(tick)

    useEffect(() => {
        setInterval(() => {
            let ticks = new Date().toLocaleTimeString();
            let todays = new Date().toLocaleDateString();
            setTimer(ticks)
            setDate(todays)
        }, 1000);
    })

    return(
        <div className="container-fluid card-time mx-auto" >
                <h5>Today</h5>
                <small>{date}</small>
                <h4>{timer}</h4>
        </div>
    )
}