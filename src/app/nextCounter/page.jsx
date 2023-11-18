"use client"

import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)
    
    const increment = () => {
        setCount(count + 1)
    }
    
    const decrement = () => {
        setCount(count - 1)
    }
    return (  
        <>
          <button className="bg-red-900 p-6 m-2" onClick={decrement}>-</button> <br />
          <button className="bg-red-900 p-6 m-2" onClick={increment}>+</button>

          <span>{count}</span>
        </>
    );
}
 
export default Counter;