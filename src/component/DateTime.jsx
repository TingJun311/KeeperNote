
import React, { useState } from "react";

export default function DateTime () {

    const dateTimes = new Date();

    const [dateTime, setDateTime] = useState({
        time: dateTimes.toLocaleTimeString(),
        date: dateTimes.toLocaleDateString(),
    });
    
    const setDate = () => {
        setDateTime(() => {
            return ({
                date: new Date().toLocaleDateString(),
                time: new Date().toLocaleTimeString(),
            });
        });
    };

    setInterval(setDate ,1000)

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