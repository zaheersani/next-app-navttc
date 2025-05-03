"use client";


import Image from "next/image";
import styles from "./page.module.css";
import PeopleList from "./people.js";

const Graduated = ({year}) => {
  return (
    <div>
      {year && <h2>Graduated</h2>}
    </div>
  );
}

const Intro = ({name = 'Zaheer'}) => {
  if(name) {
    return (
      <p>
      Hi! My name is {name}, and I am a software developer with a passion for creating web applications.
      I enjoy working with modern frameworks like Next.js and exploring new technologies.
      </p>
    )
  } else {
    return <p>You must provide name</p>
  }
}

const Interests = () => {
  return (
    <p>
    In my free time, I like to read, learn about new programming trends, and contribute to open-source projects.
    </p>
  )
}

const Qualifications = (props) => {
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

export default function Home() {
  const skills = <p>JavaScript, React, Next.js, Node.js, Express, MongoDB</p>;
  const myfun = () => 5 + 5;
  var x = 15;
  return (
    <div>
      <PeopleList />
      <h2>Biography {x <= 10 ? "less than 10" : "greater"}</h2>
      <br />
      <h3>Introduction</h3>
      <Intro name='Ahmad' />
      <br />
      <h3>Interests</h3>
      <Interests />
      <br />
      <h3>Skills</h3>
      {skills}
      <br />
      <h3>Qualifications</h3>
      <Qualifications 
        degree="MSc"  
        abroad={false} 
        year={18} 
        grades={[3.5, 3.8]} 
        degreenames={{first: "BS", second: "MS"}} 
      />
      <Graduated />
    </div>
  )
}


function Home2() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h2>Zaheer</h2>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>src/app/page.js</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
