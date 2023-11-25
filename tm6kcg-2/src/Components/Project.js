import React from "react";

export default function Project() {
  const pjStyle = {
    backgroundColor: 'black', 
    fontFamily: 'Josefin Slab',
    color: 'white'
  };
  
  return (
    
    <section id="project" style = {pjStyle}>

      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-left">

      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-left text-left">
      <h1 style={{fontFamily: 'cursive'}}> Projects </h1>

            <h2 class="project">Database Systems Senior Design Project</h2>
            <h3 class="year"> Fall 2020 </h3>
            <p class="background"> Background: For our senior design, we were tasked with designing a Youtube-like service.</p>
            <ul>
              <li> Designed an ER-model to provide a template for the database to follow </li>
              <li> Utilized the MERN Stack for the full stack implementation </li>
              <li> Implemented the model and schema for the service channel using back end </li>
              <li> Connected the server to the front end </li>
              
            </ul>
         

            <h2 class="project">Database Management Systems</h2>
            <h3 class="year"> Winter 2020 </h3>
            <p class="background"> Background: I modeled and created my own variation of an airline management system.</p>
            <ul>
              <li> Designed a logical model of the database with the ER-model </li>
              <li> Translated the ER design into PostgreSQL relational database schema </li>
              <li> Developed a client application with Java Database Connector (JDBC) </li>
              <li> Used the client application to support specific functionality and queries for the online booking system </li>
              
            </ul>
      </div>
      </div>
    </section>
  );
}