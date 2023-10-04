// NutritionTrackerMom.jsx

import React, { useState } from 'react';
import styled from 'styled-components';
import NutritionChart from './NutritionChart';

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const InputGroup = styled.div`
  margin-bottom: 10px;
`;

const TextInput = styled.input`
  padding: 10px;
  width: calc(100% - 20px);
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: purple;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #6b0f9c;
  }
`;

const NutritionTrackerMom = () => {
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [statusData, setStatusData] = useState({
    labels: ['Status'],
    datasets: [
      {
        label: 'Status',
        data: [Math.random() * 100], // Mock status data
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  });

  const handleSave = () => {
    // Mock logic to calculate status based on nutrition data
    const newStatus = Math.random() * 100;
    setStatusData({
      ...statusData,
      datasets: [
        {
          ...statusData.datasets[0],
          data: [newStatus],
        },
      ],
    });
  };

  return (
    <Wrapper>
      <Title>Nutrition Tracker for Mom</Title>

      <Section>
        <Title>Calories</Title>
        <InputGroup>
          <TextInput
            type="number"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            placeholder="Enter calories"
          />
        </InputGroup>
      </Section>

      <Section>
        <Title>Protein</Title>
        <InputGroup>
          <TextInput
            type="number"
            value={protein}
            onChange={(e) => setProtein(e.target.value)}
            placeholder="Enter protein grams"
          />
        </InputGroup>
      </Section>

      <Button onClick={handleSave}>Save</Button>

      <NutritionChart statusData={statusData} />
    </Wrapper>
  );
};

export default NutritionTrackerMom;
