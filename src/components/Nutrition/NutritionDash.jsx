// NutritionDash.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Pregnant from "./pregnant.jpeg";
import Child from "./baby.png"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const ImageContainer = styled.div`
  text-align: center;
  margin: 20px;
  padding: 40px;
  h2{
    color: white;
    background-color: purple;
    padding: 20px;
    border-radius: 20px;
  }
  h2:hover{
    color: purple;
    background-color: white;
    border: 2px solid purple;
  }
  /* color: white; */
`;

const StyledImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;
const Title = styled.h1`
padding:40px;

/* background-color: purple;
color: white; */
`;



const NutritionDash = () => {
  return (
    <Container>
        <Title>
            <h1>Nutrition Tracker </h1>
        </Title>
  
    
    <Wrapper>
        
        <ImageContainer>
        <StyledImage src={Pregnant}/>
        <br />
        <Link to="/nutrition/mom">
            <h2>Mother</h2>
        </Link>
        
        </ImageContainer>
        <ImageContainer>
        <StyledImage src={Child}/>
        <br />
        <Link to="/nutrition/kid"><h2>Child</h2></Link>
        
        </ImageContainer>
        
    </Wrapper>
    </Container>
  );
};

export default NutritionDash;
