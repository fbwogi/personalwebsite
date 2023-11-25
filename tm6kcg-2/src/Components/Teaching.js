import React from "react";

export default function Teaching() {
  const teStyle = {
    backgroundColor: 'black', 
    fontFamily: 'Josefin Slab',
    color: 'white'
  };
    return (
      <section id="teaching" style={teStyle}>

        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-left">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-left">
          <h1 style={{fontFamily: 'cursive'}}> Teaching </h1>

           
            <h4> Private Tutor </h4>
              <h5>2008 - present </h5>
              <p> Subjects I have tutored:
                <li><ul> Math (elementary school math, Calculus, Linear Algebra, Multivariate Calculus)  </ul></li>
                <li><ul> Science (Physics, Chemistry, Biology)  </ul></li>
                <li><ul> Computer Science (Data Structures, Algorithms, C/C++, Web Development, Databases)  </ul></li>
              </p>

            <h4> Web Development Instructor | America on Tech</h4>
              <h5> Summer 2023 </h5>
                <ul> I taught high school students how to create websites with HTML, CSS and Bootstrap. </ul>

          </div>
        </div>
      
      </section>
    );
    
};