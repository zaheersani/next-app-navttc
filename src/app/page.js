"use client";


import Image from "next/image";
import styles from "./page.module.css";

import { Intro } from "./biography";
import { Graduated } from "./biography";

import React from "react";

const Counter = () => {

  let [count, setCount] = React.useState(5);

  // var count = 20;
  const inc = () => {
    setCount(count + 1);
    console.log(count);
  }

  return (
    <>
    <h1>Counter Component</h1>
    <div style={{display: "flex", alignItems: "center"}}>
      <button 
        onClick={() => setCount(count - 1)}
        disabled={count <= 1}
      >Decrement</button>
      <h4>{count}</h4>
      <button 
        onClick={inc}
        disabled={count >= 10}
      >Increment</button>
    </div>
    </>
  )
}


const Signup = ({event}) => {
  return (
    <div>
      <h1>Signup</h1>
      <button onClick={event}>Signup</button>
    </div>
  )
}

export default function Home() {

  const handleClick = (e) => {
    alert("Button clicked!");
    console.log(e);
    console.log(e.target);
  };

  const handleSignupClick = () => { 
    alert("Signup button clicked!");
  }

  return (
    <main>
      
      <Intro />
      <br />
      <Counter />
      <br />
      <h1>Welcome</h1>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick}>Click Me 2</button>
      <br />
      <button onClick={() => alert('This is 3rd Button')}>Click Me 3</button>

      <Signup event={handleSignupClick} />
    </main> 
  )
}
