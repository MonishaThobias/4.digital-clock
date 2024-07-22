import React, { useState } from 'react';
import './digital-clock.css';

function DigitalClock(){
    const [time,setTime] = useState(now());
    function now(){
        return new Date().toLocaleTimeString()
    }
     
    function updateTime(){
        setTime(now());
    }
setInterval(updateTime,1000);

 return(
    <>
    <div className='app-container'>
        <div className='app-head'>
<h2><span className='fa fa-clock-o 2-x'></span> Digital Clock App</h2>
        </div>
        <div className='app-body'>
            <div className='digi-clk'>
            <h1>{time}</h1>  
            </div>
        </div>
    </div>
    </>
 );   
}

export default DigitalClock;