import React, { useState, useEffect } from 'react';
const RealTimeClock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[currentTime.getDay()];
    let hours = currentTime.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; 
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');
    const month = (currentTime.getMonth() + 1).toString().padStart(2, '0');
    const day = currentTime.getDate().toString().padStart(2, '0');
    const year = currentTime.getFullYear();
    return (
        <div className='mx-0 px-0' style={{position:'absolute', left:'0', bottom:'25'}}>
            <h6 className='fw-bolder border-bottom p-2 '>
                {dayOfWeek}, {month}/{day}/{year} {hours}:{minutes}:{seconds} {ampm}
            </h6>
        </div>
    );
};
export default RealTimeClock;
