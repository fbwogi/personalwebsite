import React from "react";


export default function experience() {
 const exStyle = {
   backgroundColor: 'black',
   fontFamily: 'Josefin Slab',
   color: 'white'
 };
 return (
   <section id="experience" style={exStyle}>
     <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-left">


       <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-left text-left">
       <h1> Experience </h1>


         <div class="row">
         <div class="col-md-6">
             <h2 class="personal">Bwogi and Associates</h2>
             <h3 class="position"> IT Specialist</h3>
             <p class="Years"> January 2020 - present</p>
             <ul>
               <li> Diagnosing client’s software and hardware issues. </li>
               <li> Running shell scripts to fix software issues. </li>
               <li> Assisting clients in software updates and downloads. </li>
               <li> Providing clients with data-driven solutions. </li>
               <li>
                 {" "}
                 Create web applications using APIs with Python and Java.{" "}
               </li>
             </ul>
             </div>
           <div class="col-md-6">


             <h2 class="GA">California State University, Fullerton</h2>
             <h3 class="position"> Graduate Assistant </h3>
             <p class="Years"> February 2023 - June 2023</p>
             <ul>
               <li>
                 {" "}
                 Performing data mining and analysis tasks with Python.{" "}
               </li>
               <li>
                 {" "}
                 Coding web scrapers for social media sites with Python.{" "}
               </li>
               <li>
                 {" "}
                 Consulting Marketing Professor Reshadi on programming aspects
                 of her research.{" "}
               </li>
             </ul>
           </div>
          
         </div>
         <div class="row">
           <div class="col-md-6">
             <h2 class="startup"> Webstacks</h2>
             <h3 class="position"> Backend Engineer, Integrations </h3>
             <p class="Years"> February 2022 - April 2022</p>
             <ul>
               <li>
                 {" "}
                 Provided code reviews, refactor codebases and debug code.{" "}
               </li>
               <li>
                 {" "}
                 Created scalable web applications on the server-side using
                 Node.JS and Python.{" "}
               </li>
               <li> Integrated data into Hubspot CRM. </li>
               <li> Maintained and update MongoDB and client databases. </li>
             </ul>
           </div>
           <div class="col-md-6">
             <h2 class="firstjob"> Dropplugg Inc. </h2>
             <h3 class="position"> Software Developer </h3>
             <p class="Years"> August 2021 - February 2022</p>
             <ul>
               <li>
                 {" "}
                 Designed and implement database schemas and API endpoints.
               </li>
               <li>
                 {" "}
                 Configured deployment and local development using Heroku and
                 Netlify.{" "}
               </li>
               <li>
                 {" "}
                 Built web applications using MERN stack, Python and Java.{" "}
               </li>
               <li>
                 {" "}
                 Created data visualizations using Python libraries NumPy and
                 Pandas.{" "}
               </li>
             </ul>
           </div>
         </div>
       </div>
     </div>
     <br />
   </section>


 );
}
