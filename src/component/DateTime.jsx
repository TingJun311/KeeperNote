
import React, { useState } from "react";

export default function DateTime () {
    // This component allow to the get and render latest time 

    const dateTimes = new Date();

    const [dateTime, setDateTime] = useState({
        time: dateTimes.toLocaleTimeString(),
        date: dateTimes.toLocaleDateString(),
    });
    
    const setDate = () => {
        // To set the new time and date
        setDateTime(() => {
            return ({
                date: new Date().toLocaleDateString(),
                time: new Date().toLocaleTimeString(),
            });
        });
    };

    setInterval(setDate ,1000)
    // Set the time every 1000 milles second = 1 sec

    return (
        <>
            <p className="title" style={{
                fontSize: "20px"
            }}>
                <strong>    
                    {dateTime.date} &nbsp; {dateTime.time} 
                </strong>
            </p>
        </>
    )
}