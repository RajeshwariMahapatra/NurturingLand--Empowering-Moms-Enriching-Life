import React, { useState, useEffect } from 'react';
// import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import Nutrition from './nutrition-color.png';
import { Link} from "react-router-dom"

const TrackerContainer = styled.div`
  /* max-width: 600px;
  margin: 0 auto; */
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  height: 100vh;
`;

const Title = styled.h1`
  text-align: center;
  color: purple;
  font-size: 50px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Input = styled.input`
  flex: 1;
  padding: 5px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: purple;
  color: white;
`;

const NutritionInfo = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const FoodRecommendation = styled.p`
  color: ${(props) => props.color};
`;
const Navigation = styled.div`
  padding: 20px;
  margin: 20px;
  display: flex;
  justify-content: space-around;;
`;
const ImageSide = styled.img`
  width: 80%;
  height: auto;
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  `;

  const MainCon = styled.div`
    display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 60px;
  width: 100%;
  `;

const BabyNutritionTracker = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [feedingTime, setFeedingTime] = useState('');
  const [bmi, setBMI] = useState(null);
  const [foodRecommendationInfo, setFoodRecommendationInfo] = useState(null);

  useEffect(() => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const calculatedBMI = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBMI(calculatedBMI);
      setFoodRecommendationInfo(getFoodRecommendations(calculatedBMI));
    }
  }, [weight, height]);

  const getFoodRecommendations = (bmi) => {
    if (bmi < 16) {
      return { text: 'Food recommendation for severely underweight babies: High-calorie foods like avocados, bananas, and fortified cereals.', color: 'red' };
    } else if (bmi >= 16 && bmi < 18.5) {
      return { text: 'Food recommendation for underweight babies: Balanced diet including fruits, vegetables, grains, and proteins.', color: 'orange' };
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return { text: 'Food recommendation for normal weight babies: Continue with a balanced diet including fruits, vegetables, grains, and proteins.', color: 'green' };
    } else if (bmi >= 25 && bmi < 30) {
      return { text: 'Food recommendation for overweight babies: Focus on portion control and a variety of nutritious foods.', color: 'blue' };
    } else {
      return { text: 'Food recommendation for obese babies: Consult a pediatrician for a specialized diet plan.', color: 'purple' };
    }
  };

  const handleLogActivity = () => {
    console.log('Feeding time:', feedingTime);
  };

  return (
    <MainCon>
    <TrackerContainer>
      <Title>Baby Nutrition Tracker</Title>

      <InputContainer>
        <Label>Weight (kg):</Label>
        <Input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter weight"
        />
      </InputContainer>

      <InputContainer>
        <Label>Height (cm):</Label>
        <Input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Enter height"
        />
      </InputContainer>
    <Navigation><Button onClick={handleLogActivity}>Calculate</Button>
      
      <Link to="/dashboard"><Button>Back</Button></Link></Navigation>
      

      {bmi && (
        <NutritionInfo>
          <h2>BMI: {bmi}</h2>
          <FoodRecommendation color={foodRecommendationInfo.color}>
            <br />
            {foodRecommendationInfo.text}
          </FoodRecommendation>
        </NutritionInfo>
      )}
    </TrackerContainer>
    <ImageSide src={Nutrition}>
    </ImageSide>
    </MainCon>
  );
};

export default BabyNutritionTracker;
