"use client";


import Image from "next/image";
import styles from "./page.module.css";

import { Intro } from "./biography";
import { Graduated } from "./biography";

import TODO from "./todo-app/todo";

import React from "react";

const Counter = () => {

  let [count, setCount] = React.useState(5);
  // let count = 5;
  // const setCount = (newCount) => {
  //   count = newCount;
  //   console.log(count);
  // }

  // var count = 20;
  const inc = () => {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    // setCount(count + 1);
    // setCount(count + 1);
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

  const [showAll, setShowAll] = React.useState(false);

  return (
    <main>
      <TODO />
      {/* <Counter /> */}
      {/* <h1>Biography</h1>
      <button 
        onClick={() => setShowAll(!showAll)}
      >{showAll ? "Hide" : "Show"} All</button>
      <Intro showAll={showAll} />
      <br />
      
      <br />
      <h1>Welcome</h1>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick}>Click Me 2</button>
      <br />
      <button onClick={() => alert('This is 3rd Button')}>Click Me 3</button>

      <Signup event={handleSignupClick} /> */}
    </main> 
  )
}
