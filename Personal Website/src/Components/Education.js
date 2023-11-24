import React from "react";

export default function education() {
  const edStyle = {
    backgroundColor: 'black', 
    fontFamily: 'Josefin Slab',
    color: 'white'
  };
  
  return (
    
    <section id="education" style = {edStyle}>

      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-left">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-left text-left">
        <h1> Education </h1>
        <br />

      <div className = "row">
        <div className = "col-md-6">    
          
                <h2 class="Grad School">California State University, Fullerton</h2>
                <h3 class="DegreeM"> Master of Science</h3>
              
                <p class="Gradmajor">
                  {" "}
                  IT, Data Science concentration
                </p>
                <p class="Gradyears"> August 2022 - present</p>
                <p class="Courses"> Relevant Coursework: Business Database Design, Information Resources and IT Project Management, Statistics for Data Science, Principles of Business Intelligence, Business Data Transformation, Data Warehouse, Data Mining for Business Applications, Advanced Regression Analysis, Artificial Intelligence </p>
        </div>

        <div className = "col-md-6">
          <h2 class="Undergrad">University of California, Riverside</h2>
          <h3 class="BS"> Bachelor of Science</h3>
          <p class="Major"> Computer Engineering </p>
          <p class="Undergradyears"> September 2015 - March 2021</p>
          <p class="UGCourses"> Relevant Coursework: Software Construction, Data Structures and Algorithms, Database Management Systems, Embedded Systems, Operating Systems, Intro to Machine Learning and Data Mining, Data Analysis Methods, Computer Networks, Database Systems Senior Design </p>

        </div>
        </div>
      </div>
      </div>
    </section>
  );
}
