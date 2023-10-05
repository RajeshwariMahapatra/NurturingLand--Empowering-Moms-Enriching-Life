import React, { useState } from 'react';
import styled from 'styled-components';
import Nutrition from './nutrition-color.png';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 60px;
  width: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;



const SubmitButton = styled.button`
  background-color: purple;
  color: white;
  width: 30%;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  &:hover {
    background-color: white;
    color: purple;
  }
`;
const Back = styled.button`
  border: 1px solid ${(props) => (props.border ? "#793698" : "#793698")};
  background-color: ${(props) => (props.border ? "transparent" : "#793698")};
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${(props) => (props.border ? "#A98FC1" : "#fff")};
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "#A98FC1")};
    border: 1px solid #e0b5d9;
    color: ${(props) => (props.border ? "#A98FC1" : "#fff")};
  }
`;


const Title = styled.div`
h1{}
  text-align: center;
  margin-bottom: 20px;
  color: #333;
  align-items: center;
  color: purple;
`;

const UserForm = styled.form`
  display: flex;
  flex-direction: column;
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

const NutritionStatus = styled.div`
  margin-top: 20px;
  text-align: center;

  h2 {
    font-weight: bolder;
    color: ${(props) => {
      if (props.status === 'Undernourished') return 'red';
      if (props.status === 'Well-nourished') return 'green';
      if (props.status === 'Overweight') return 'orange';
      return 'black';
    }};
  }
`;

const calculateNutritionStatus = (gender, height, weight) => {
  const bmi = weight / ((height / 100) ** 2);

  if (bmi < 18.5) {
    return 'Undernourished';
  } else if (bmi < 24.9) {
    return 'Well-nourished';
  } else {
    return 'Overweight';
  }
};

const NutritionTrackerComponent = () => {
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [nutritionStatus, setNutritionStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const status = calculateNutritionStatus(gender, height, weight);
    setNutritionStatus(status);
  };

  return (
    <Container>
      <Wrapper>
        <Title><h1>Nutrition Tracker</h1></Title>
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
          {/* <Back  >Back</Back> */}
      
        
        </UserForm>
        <NutritionStatus status={nutritionStatus}>
          {nutritionStatus && <h2>Status: {nutritionStatus}</h2>}
        </NutritionStatus>
        {/* <Link to="/dashboard"><Back>Back</Back></Link> */}
      </Wrapper>
      <Image src={Nutrition} alt="Nutrition" />
    </Container>
  );
};

export default NutritionTrackerComponent;
