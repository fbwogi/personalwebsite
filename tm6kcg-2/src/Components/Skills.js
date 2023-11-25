import React from "react";

export default function Skills() {
  const skStyle = {
    backgroundColor: 'black', 
    fontFamily: 'Josefin Slab',
    color: 'white'
  };
    return (
        <section id="skills" style={skStyle}>

          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-left">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-left text-left">
            <h1 style={{fontFamily: 'cursive'}}> Skills </h1>

          <div className = "row">
            <div className = "col-md-4">    
              
                    <h2 class="topic">Data Visualization</h2>
                    <ul>
                        <li> Tableau </li>
                        <li> Microsoft Excel </li>
                        <li> IBM SPSS Statistics </li>
                        <li> PowerBI </li>
                        
                    </ul>
            </div>

            <div className = "col-md-4">
            <h2 class="topic">Tools and Framework</h2>
                    <ul>
                        <li> Databases (PostgreSQL, MySQL, SQLLite, MongoDB) </li>
                        <li> pgAdmin </li>
                        <li> Python (Django, NumPy, Pandas, PyTorch, Tensorflow) </li>
                        <li> RStudio </li>
                        
                    </ul>
            </div>

            <div className = "col-md-4">
            <h2 class="topic">Programming Languages</h2>
                    <ul>
                        <li> C/C++ </li>
                        <li> HTML/CSS </li>
                        <li> Javascript (Express, Node, React, React Native Vue) </li>
                        <li> Java </li>
                        <li> MATLAB </li>
                        <li> Python </li>
                        <li> R </li>
                        <li> Verilog </li>
                    </ul>
            </div>
            </div>
          </div>
          </div>
      </section>
    );
};