import React, { useEffect, useState, useMemo} from "react";
import ReactDom from "react-dom/client";

// useMemo hook
// 1. Counter button: increase
// 2. input field: fibonacci number
// 0 1 1 2 3 5 8 13 21 34 . . . 


function App(){
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState("");
    // const [result , setResult] = useState("");

    
    function fibonacci(n){

        if(n<2){
            return n;
        }

        return fibonacci(n-1)+fibonacci(n-2);
    }

    const result = useMemo(()=>fibonacci(number),[number]);

    // useEffect(()=>{
    //     setResult(fibonacci(number));
    // },[number])


    return(

        <>
            <h1>Counter is: {count}</h1>
            <button onClick={()=>{setCount(count+1)}}>Increment</button>
            <button onClick={()=>{setCount(count-1)}}>Decrement</button>

            <div>
                <h2>Fibonacci number is: {result}</h2>
                <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}></input>
            </div>
        </>
    )
}


ReactDom.createRoot(document.getElementById('root')).render(<App></App>)