"use client"
import { Provider } from "react-redux";
import Store from "./store";
import Counter from "./counter";
   


export default function Home() {
  return (
    <Provider store={Store}>
    <main className="flex flex-col p-24">
        <h1>tool kite</h1>
        <Counter />
    </main>
    </Provider>
  )
}
