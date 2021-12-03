import React, { useState, useEffect } from 'react'
import Gear from '../images/gear.svg'

const Timer = () => {
    const [minutes, setMinutes] = useState("00")
    const [seconds, setSeconds] = useState("00")
    const [isActive,setisActive] = useState(false)
    const [counter, setCounter] = useState(0)
function toggle(){
    setisActive(!isActive)
}
function reset(){
    setSeconds("00")
    setMinutes("00")
    setCounter(0)
    setisActive(false)
}

useEffect(() => {
let interval = null;
if(isActive ) {
    interval = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60)
        const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}` : secondCounter
        const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}` : minuteCounter
        setSeconds(computedSecond)
        setMinutes(computedMinute)
        setCounter(counter => counter +1)
    }, 1000)}
    else {
        clearInterval(interval)
    }
    return () => clearInterval(interval)
},[isActive, counter])


    return (
        
        <div className="wrapper">
        <div className={`ring ${isActive ? 'ring' : 'ringStop' }`}>
          <svg width="518" height="518" viewBox="0 0 518 518">
            <circle stroke-width="9px" x="0" y="y" cx="259" cy="259" r="254" />
          </svg>
        </div>
    
        <div className="timer">
          <div className="time">
            <div className="minutes">
              {minutes}
            </div>
            <div className="colon">:</div>
            <div className="seconds">
              {seconds}
            </div>
          </div>
          <button className="start" onClick={toggle}>{isActive ? "STOP" : "START"}</button>
          <button className="reset" onClick={reset}>Reset</button>
          <button className="settings">
            <img src={Gear} alt="Settings" />
          </button>
          
        </div>
      </div>
    )
}

export default Timer
