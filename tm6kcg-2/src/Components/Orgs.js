import React from "react";

export default function Project() {
  
  const orStyle = {
    backgroundColor: 'black', 
    fontFamily: 'Josefin Slab',
    color: 'white'
  };
  return (
    
    <section id="orgs" style={orStyle}>

      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-left">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-left">
          <h1 style={{fontFamily: 'cursive'}}> Organizations/Affiliations </h1>
            <h3> <a href= "http://www.nsbe.org" target = "_blank">National Society of Black Engineers </a></h3>
              <p> Member: 2015-present              </p>
              <h5> Positions </h5>
              <h6> CSU Fullerton NSBE Chapter </h6>
                <p> President 2023-present 
                  <ul> I have created events to help provide support and foster a safe space for black engineering and technology students </ul>
                  <ul> I am currently in charge of a computer science project geared towards our CS/CE members </ul>
                </p>
                
              <h6> UC Riverside NSBE Chapter </h6> 

                <p> Vice President 2018-2019 
                  <ul> I helped host programs and events for the chapter such as study jams and K-12 events </ul>
                  <ul> I helped build internal and external support for the chapter </ul>
                </p>
                <p> Webmaster 2017-2018 
                  <ul> I helped maintain the NSBE site with BCOE </ul>
                </p>
                
            <h3> <a href= "https://www.lablackengineers.org">Los Angeles Council of Black Professional Engineers </a></h3>
              <p> Member: 2023-present </p>
        </div>
      </div>
    
    </section>
  );
}