"use client"

import { useDispatch, useSelector } from "react-redux";
import { decrementAction, incrementAction } from "./counterSlice";

const Counter = () => {
    const dispatch = useDispatch()
    const value = useSelector (state => state.counter.value)

    return ( 
        <>
        <h1 className="text-black">
          Value: { value}

        </h1>
          <br />
          <button className="m-2 p-2 bg-slate-800 hover:bg-slate-900 cursor-pointer" onClick={() => dispatch(incrementAction())}>Increment</button>
          <button className="m-2 p-2 bg-slate-800 hover:bg-slate-900 cursor-pointer" onClick={() => dispatch(decrementAction())}>decrement</button>
          <button className="m-2 p-2 bg-slate-800 hover:bg-slate-900 cursor-pointer" onClick={() => dispatch(decrementAction())}>decrement</button>
        </>
     );
}
 
export default Counter;