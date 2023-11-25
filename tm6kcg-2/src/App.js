import React from "react";
import About from "./Components/About";
import Education from "./Components/Education";
import Header from "./Components/Header"
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import Project from "./Components/Project"
import Orgs from "./Components/Orgs"
import Skills from "./Components/Skills"
import Teaching from "./Components/Teaching"
import "./styles.css";

export default function App() {


  return (
    <main className="app">
    <Header />  

    <About />
    <br/>
    <Education />
    <br/>
    <Experience />
    <br/>
    <Project />
    <Skills />
    <br/>
    <Teaching />
    <Orgs/>
    <Contact />
    </main>
  );
}
