import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 20px;
  background-color: black;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding-right: 24px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  text-align: center;

  @media (min-width: 768px) {
    text-align: right;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  color: white;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

const Description = styled.p`
  margin-bottom: 2rem;
  font-size: 1.25rem;
  color: white;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
`;

function About() {
  return (
    <Section id="about">
      <Container>
        <InfoContainer>
          <p style={{color:'white'}}>I am a graduate student with an extensive background and passion for technology and business. I am also a freelance IT Specialist with well-developed software engineering and data science knowledge. Over the years, I have honed my technical skills and have developed a deep level of interest in the following areas:
          <ul>Artificial Intelligence
                <ul> Machine Learning </ul>
                <ul> Data Mining </ul>
                <ul> Natural Language Processing </ul>
                <ul> Large Language Models </ul>

                <ul> Deep Learning </ul>
              </ul>
              <ul> Data Science </ul>
              <ul> Data Engineering </ul>
              <ul> Databases </ul>
              <ul> Cloud Computing </ul>
              <ul> Embedded Systems </ul>
           </p>
           
          
          <p> 
         </p>
          <div className="flex justify-center"></div>
        </InfoContainer>
        
      </Container>
    </Section>
  );
}

export default About;
