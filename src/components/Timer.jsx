import { useState } from "react"
import '../App.css'

function Timer(){

    console.log("Timer component")

    const [timercount, setTimercount]= useState(0);
   function setsetTimercount(){ 
   setInterval(()=>(setTimercount((prev)=>(prev+1))),1000)
    }

    const stoptimer=()=>{
        clearInterval(interval1)
    }



    return(
        <div>
            <p>Timer </p>
            <button onClick={setsetTimercount}>Start {timercount}</button>
            <button onClick={stoptimer}>Stop</button>
           
        </div>
    )
}

export default Timer