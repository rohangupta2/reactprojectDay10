import React, { useEffect, useState, useMemo, useRef} from "react";
import ReactDom from "react-dom/client";

// money ko global variable bhee bana ke same cheej achieve ho rhi hai
// let money = 0; 

// function App(){

//     const [count, setCount] = useState(0);
//     let money = useRef(0);
//     // console.log(money)

//     return(
//         <>
//             <h1>Counter is: {count}</h1>
//             <button onClick={()=>{setCount(count+1)}}>Increment</button>
            
//             <h1>Money is: {money.current}</h1>
//             <button onClick={()=>{money.current = money.current+1
//                 console.log(money.current)
//             }}>Increment</button>
//         </>
//     )

// }

// ReactDom.createRoot(document.getElementById('root')).render(<App></App>)



function StopWatch(){
    const [time, setTime] = useState(0);
    const intervalRef = useRef(null);
    
    function start(){
        if(!intervalRef.current){
            intervalRef.current = setInterval(() => {
                setTime((prevTime)=>prevTime+1);
                // console.log(time);
            }, 1);
        }
    }


    function stop(){

        clearInterval(intervalRef.current);
        intervalRef.current=null;
    }


    function reset(){
        clearInterval(intervalRef.current);
        intervalRef.current=null;
        setTime(0);
    }


    return(
        <>
            <h1>StopWatch is: {time}</h1>
            <button onClick={start}>Start</button>
            <br></br>
            <br></br>
            <button onClick={stop}>Stop</button>
            <br></br>
            <br></br>
            <button onClick={reset}>Reset</button>
        </>
    )
}





ReactDom.createRoot(document.getElementById('root')).render(<StopWatch></StopWatch>)