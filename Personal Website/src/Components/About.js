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
  color: #333;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

const Description = styled.p`
  margin-bottom: 2rem;
  font-size: 1.25rem;
  color: #666;
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
          <p>I am a graduate student with an extensive background and passion for technology and business. </p>
          <Description>
            <h4>Areas of Interests:</h4>
            <h5>
              <ul>Artificial Intelligence
                <ul> Machine Learning </ul>
                <ul> Data Mining </ul>
                <ul> Natural Language Processing </ul>
                <ul> Deep Learning </ul>
              </ul>
              <ul> Data Science </ul>
              <ul> Data Engineering </ul>
              <ul> Databases </ul>
              <ul> Cloud Computing </ul>
              <ul> Embedded Systems </ul>
            </h5>
          </Description>
          <p> 
         </p>
          <div className="flex justify-center"></div>
        </InfoContainer>
        
      </Container>
    </Section>
  );
}

export default About;
