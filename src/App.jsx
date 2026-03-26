import { useState, useEffect } from 'react'; //react hook
import './App.css';

function App() {
  const [time,setTime] = useState(0); // setting the initial time to 0 and the setTime is the function
  const [running,setRunning] = useState(false);

  useEffect(()=>{
    let interval;
    if(running){
      interval= setInterval(()=>{
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
    else if (! running){
      clearInterval(interval); //if not running the timer is stopped
    }
    return() => clearInterval(interval);
  }, [running])

  return(
  <>
  <h1>STOPWATCH</h1>
  <div>
    <span>{("0" + Math.floor((time/60000)%60)).slice(-2)}:</span>
    <span>{("0" + Math.floor((time/1000)%60)).slice(-2)}:</span>
    <span>{(("0" + Math.floor((time/10)%100))).slice(-2)}</span>
  </div>
  <div>
    {running ? (
      <button onClick={()=>{setRunning(false)}}>Stop</button> /* when the stop button is clicked the function stops running */
    ):(
    <button onClick={()=>{setRunning(true)}}>Start</button> /* when the start button is clicked the function runs*/
    )}
    <button onClick={()=>{setTime(0)}}>Reset</button>
  </div>
  </> 
  );
}

export default App;