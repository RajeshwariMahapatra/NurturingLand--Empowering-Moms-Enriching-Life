import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 400px;
  margin-left: 30px;
    margin-right: 30px;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const Title = styled.h2`
  text-align: center;
  color: #6A0572;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const Label = styled.label`
  margin-right: 10px;
  color: #6A0572;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #6A0572;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;

const Result = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const HydrationTracker = () => {
  const [hydration, setHydration] = useState('');
  const [goal, setGoal] = useState('');
  const [percentage, setPercentage] = useState(null);

  const calculatePercentage = () => {
    if (hydration && goal) {
      const hydrationPercentage = ((hydration / goal) * 100).toFixed(2);
      setPercentage(hydrationPercentage);
    }
  };

  return (
    <Container>
      <Title>Hydration Tracker &#128167; </Title>

      <InputContainer>
        <Label>Current Hydration (ml):</Label>
        <Input
          type="number"
          value={hydration}
          onChange={(e) => setHydration(e.target.value)}
          placeholder="Enter current hydration"
        />
      </InputContainer>

      <InputContainer>
        <Label>Daily Hydration Goal (ml):</Label>
        <Input
          type="number"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          placeholder="Enter daily hydration goal"
        />
      </InputContainer>

      <Button onClick={calculatePercentage}>Calculate Hydration Percentage</Button>

      {percentage !== null && (
        <Result>
          <h2>Hydration Percentage: {percentage}%</h2>
          <p>{percentage >= 100 ? 'You met your hydration goal. Great job!' : 'Keep hydrating to meet your goal.'}</p>
        </Result>
      )}
    </Container>
  );
};

export default HydrationTracker;
