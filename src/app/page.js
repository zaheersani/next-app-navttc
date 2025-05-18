"use client";


import Image from "next/image";
import styles from "./page.module.css";

import { Intro } from "./biography/page";
import { Graduated } from "./biography/page";

import TODO from "./dashboard/todo-app/page";
import TODOAPI from "./dashboard/todo-app-api/page";

import weatherdata from "./weather/data.json";

import React from "react";

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

  console.log(weatherdata.main);

  return (
    <main>
      <h1>Main Page</h1>
      {/* <TODOAPI /> */}
      {/* <TODO /> */}
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
