//page.jsx

//Basically, this is how access the stored state or update the store with state of your component.

"use client";

import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./GlobalRedux/Featues/counter/counterSlice";


export default function Home() {
//useSelector gets the state from store
  const count = useSelector((state) => state.counter.value); // Access the counter state

//useDispatch updates the store with the state from a component, as defined by your logic inside the counterslice.js
  const dispatch = useDispatch();

  return (
    <div className="bg-green-300 px-12 py-12">
      <h1 className="mb-12 ml-16 text-3xl">Counter: {count}</h1> {/* Display the counter state */}
      <button className="py-2 px-4 rounded-xl  bg-blue-800 hover:bg-blue-900 mx-2" onClick={() => dispatch(increment())}>Increment</button>
      <button className="py-2 px-4 rounded-xl  bg-blue-800 hover:bg-blue-900 mx-2" onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}