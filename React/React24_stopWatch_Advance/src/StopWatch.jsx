import { useRef } from "react"
import { useState } from "react"

function StopWatch() {
  const [time,setTime]=useState(0)
  // const [isRunning, setIsRunning] = useState(false) 

  const intervalRef=useRef(0)
  
  console.log(time);

  const start=()=>{
      if(!intervalRef.current){
        intervalRef.current=setInterval(()=>{
        setTime((prev)=>prev+1)
      },1000)
      intervalRef.current(true)
      }
      
  }


  const stop=()=>{
    if(intervalRef.current){
        clearInterval(intervalRef.current)
    intervalRef.current=null
    console.log("Timer Stopped",intervalRef.current);
    }
    intervalRef.current(false)
  }
  


  const reset=()=>{
    clearInterval(intervalRef.current)
    intervalRef.current=null
    setTime(0)
  }



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4">
      <div className="w-full max-w-md rounded-2xl border border-gray-800 bg-gray-900 p-8 shadow-2xl">

        {/* Heading */}
        <h1 className="mb-8 text-center text-3xl font-bold text-white">
          Stopwatch
        </h1>

        {/* Timer Display */}
        <div className="mb-8 rounded-xl bg-gray-950 py-10 text-center">
          <p className="font-mono text-5xl font-semibold tracking-wider text-white">
            {time}
          </p>

          <p className="mt-3 text-sm text-gray-500">
            HH : MM : SS
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button
          onClick={start}
            className="rounded-lg bg-green-500 cursor-pointer px-6 py-3 font-semibold text-white transition hover:bg-green-600"
          >
            Start
          </button>

          <button
          onClick={stop}
            className="rounded-lg bg-red-500 px-6 py-3 cursor-pointer font-semibold text-white transition hover:bg-red-600"
          >
            Stop
          </button>

          <button
          onClick={reset}
            className="rounded-lg bg-gray-700 px-6 py-3 cursor-pointer font-semibold text-white transition hover:bg-gray-600"
          >
            Reset
          </button>
        </div>

      </div>
    </div>
  );
}

export default StopWatch;