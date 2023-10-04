// NutritionTracker.jsx

import React, { useState } from 'react';
import styled from 'styled-components';
import Nutrition from "./nutrition-color.png"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 60px;
  width: 100%;
`;

const Wrapper = styled.div`
  /* max-width: 400px; */
  width: 100%;
  padding: 20px;
  /* border: 1px solid #ccc; */
  border-radius: 10px;
`;

const Image = styled.img`
  width: 100%;
  /* max-width: 400px; Adjust as needed */
  height: auto;
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

`;
// ... (existing code)

const SubmitButton = styled.button`
  background-color: purple;
  color: white;
  width: 30%;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
  border-radius: 5px; /* Add border-radius for rounded corners */
  transition: background-color 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  
  &:hover {
    background-color: white;
    color:purple; /* Change color on hover */
  }
`;

// ... (existing code)


const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const UserForm = styled.form`
  display: flex;
  flex-direction: column;
  button{

  }
`;

const InputGroup = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Select = styled.select`
  padding: 10px;
  width: 100%;
`;

const TextInput = styled.input`
  padding: 10px;
  width: 100%;
`;

// const SubmitButton = styled.button`
//   background-color: purple;
//   color: white;
//   padding: 10px 20px;
//   border: none;
//   cursor: pointer;
//   font-size: 16px;
//   margin-top: 10px;
// `;

const NutritionStatus = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const Undernourished = styled.h1`
  color: red;
  font-weight: bolder;
`;

const WellNourished = styled.h1`
  color: green;
  font-weight: bolder;
`;

const UserInfoForm = ({ onFormSubmit }) => {
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit({ gender, height, weight });
  };

  return (
    <Wrapper>
      <Title>Nutrition Tracker</Title>
      <UserForm onSubmit={handleSubmit}>
        <InputGroup>
          <Label htmlFor="gender">Gender:</Label>
          <Select id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Select>
        </InputGroup>
        <InputGroup>
          <Label htmlFor="height">Height (cm):</Label>
          <TextInput type="number" id="height" value={height} onChange={(e) => setHeight(e.target.value)} />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="weight">Weight (kg):</Label>
          <TextInput type="number" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </InputGroup>
        <SubmitButton type="submit">Submit</SubmitButton>
      </UserForm>
    </Wrapper>
  );
};

const NutritionTrackerComponent = () => {
  const [nutritionStatus, setNutritionStatus] = useState(null);

  const calculateNutritionStatus = ({ gender, height, weight }) => {
    // Implement the nutrition status calculation based on WHO guidelines
    // using the provided user information (gender, height, weight).
    // For simplicity, let's assume a random status.
    const randomStatus = Math.random() < 0.5 ? 'Undernourished' : 'Well-nourished';
    setNutritionStatus(randomStatus);
  };

  return (
    <Container>
        <Wrapper>
      <UserInfoForm onFormSubmit={calculateNutritionStatus} />
      
      <NutritionStatus>
        {nutritionStatus === 'Undernourished' && <Undernourished>Status: Undernourished</Undernourished>}
        {nutritionStatus === 'Well-nourished' && <WellNourished>Status: Well-nourished</WellNourished>}
      </NutritionStatus>
      </Wrapper>
      <Image src={Nutrition} alt="Nutrition" />
    </Container>
  );
};

export default NutritionTrackerComponent;
