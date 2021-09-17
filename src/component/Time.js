import { useState } from "react"
import { useEffect } from "react"

export default function Time() {

    const locale = "id"
    let date = new Date()
    let utc = date.toLocaleDateString(locale)
    let today = date.toString(locale).split(" ", 5)
    console.log(date)
    const tick = {
        day: "",
        month: "",
        dateDay: "",
        year: "",
        hour: "",
    }

    const [timer, setTimer] = useState(tick)

    const setTick = () => {
        
        today.map((day) => {
            setTimer(...today, day)
        })

        console.log(timer)

        let day = date.getHours()
        let month = timer.getMinutes()
        let year = timer.year
        let hour = timer.hour
        let minute = timer.minute
        let second = timer.second

        // const newTimer = {
        //     day: timer.day,
        //     month: timer.month,
        //     year: timer.year,
        //     hour: timer.hour,
        //     minute: timer.minute,
        //     second: timer.second
        // }
    }
    

    return(
        <>
        </>
    )
    
}