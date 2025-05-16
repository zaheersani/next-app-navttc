import React, {useState} from "react";

export const Graduated = ({year}) => {
    return (
      <div>
        {year && <h2>Graduated</h2>}
      </div>
    );
  }
  
  export const Intro = ({name = 'Zaheer', showAll = false}) => {
    var [show, setShow] = useState(showAll);
    // setShow(showAll);
    // if(show !== showAll) {
    //   setShow(showAll);
    // }
    if(show) {
      if(name) {
        return (
          <>
            <h3>Introduction</h3>
            <button
              onClick={() => setShow(!show)}
            >{show ? 'Hide' : 'Show'} details</button>
            <p>
            Hi! My name is {name}, and I am a software developer with a passion for creating web applications.
            I enjoy working with modern frameworks like Next.js and exploring new technologies.
            </p>
          </>
        )
      } else {
        return <p>You must provide name</p>
      }
    } else {
      return (
        <>
          <h3>Introduction</h3>
          <button
            onClick={() => setShow(true)}
          >show details</button>
        </>
      )
    }
  }
  
  export const Interests = () => {
    return (
      <p>
      In my free time, I like to read, learn about new programming trends, and contribute to open-source projects.
      </p>
    )
  }
  
  export const Qualifications = (props) => {
    console.log(props)
    return (
      <>
        <p>Highest Degree: {props.degree}</p>
        <p>{props.abroad ? "Foreign Degree" : "Local Degree"}</p>
        <p>First Degree: {props.degreenames.first}</p>
        <p>Second Degree: {props.degreenames.second}</p>
        <p>Year of Graduation: {props.year}</p>
        <p>{props.grades.map((g) => <li>{g}</li>)}</p>
      </>
    )
  }