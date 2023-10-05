// NutritionTrackerMom.jsx

import React, { useState } from 'react';
import styled from 'styled-components';
import LineChart from './LineChart';
import { Chart as ChartJS} from "chart.js/auto"
import { data } from 'jquery';
import HydrationTracker from './Hydration/HydrationTracker';
import RecipeAnalyzer from './Recipe/RecipeAnalyzer';
import "./styles/Water.css"
import TopNavbar from '../Nav/TopNavbar';

// const Wrapper = styled.div`
//   max-width: 800px;
//   margin: 0 auto;
//   padding: 20px;
//   border: 1px solid #ccc;
//   border-radius: 10px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
// `;

// const Section = styled.div`
//   margin-bottom: 20px;
// `;

// const Title = styled.h2`
//   margin-bottom: 10px;
// `;

// const InputGroup = styled.div`
//   margin-bottom: 10px;
// `;

// const TextInput = styled.input`
//   padding: 10px;
//   width: calc(100% - 20px);
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

// const Button = styled.button`
//   padding: 10px 20px;
//   background-color: purple;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;

//   &:hover {
//     background-color: #6b0f9c;
//   }
// `;

const NutritionTrackerMom = () => {
  // const [calories, setCalories] = useState('');
  // const [protein, setProtein] = useState('');
  // const [date, setDate] = useState('');
  // const [statusData, setStatusData] = useState({
  //   labels: ['Status'],
  //   datasets: [
  //     {
  //       label: 'the blue thing',
  //       data: [], // Mock status data
  //       backgroundColor: 'rgba(75,192,192,0.4)',
  //       borderColor: 'rgba(75,192,192,1)',
  //       borderWidth: 1,
  //     },
  //   ],
  // });

//   // useEffect(() => {
//   //   // Update the chart data whenever the statusData or date changes
//   //   const updateChart = () => {
//   //     const chart = myChart.current; // Assuming you have a ref to your chart
//   //     if (chart) {
//   //       chart.data.labels = statusData.labels;
//   //       chart.data.datasets[0].data = statusData.datasets[0].data;
//   //       chart.update(); // Trigger chart update
//   //     }
//   //   };

//   //   updateChart();
//   // }, [statusData, date]);


//   const handleSave = () => {
//     // Mock logic to calculate status based on nutrition data
//     const newStatus = (calories + protein) / 2;
  
//     // Create a copy of the existing data array and append the new value
//     const newData = [...statusData.datasets[0].data, newStatus];
  
//     // Create a copy of the existing labels array and append the new date
//     const newLabels = [...statusData.labels, date];
  
//     // Update the statusData state with the new data and labels
//     setStatusData({
//       ...statusData,
//       datasets: [
//         {
//           ...statusData.datasets[0],
//           data: newData,
//         },
//       ],
//       labels: newLabels,
//     });
//   };
  

  return (
    // <Wrapper>
    //   <Title>Nutrition Tracker for Mom</Title>

    //   <Section>
    //     <Title>Date</Title>
    //     <InputGroup>
    //       <TextInput
    //         type="date"
    //         value={date}
    //         onChange={(e) => setDate(e.target.value)}
    //       />
    //     </InputGroup>
    //   </Section>

    //   <Section>
    //     <Title>Calories</Title>
    //     <InputGroup>
    //       <TextInput
    //         type="number"
    //         value={calories}
    //         onChange={(e) => setCalories(parseInt(e.target.value))}
    //         placeholder="Enter calories"
    //       />
    //     </InputGroup>
    //   </Section>

    //   <Section>
    //     <Title>Protein</Title>
    //     <InputGroup>
    //       <TextInput
    //         type="number"
    //         value={protein}
    //         onChange={(e) => setProtein(parseInt(e.target.value))}
    //         placeholder="Enter protein grams"
    //       />
    //     </InputGroup>
    //   </Section>

    //   <Button onClick={handleSave}>Save</Button>

    //   {/* Add the LineChart component with the appropriate props */}
    //   <LineChart statusData={statusData} />
    // </Wrapper>  
   
    <div className='main'>
      <TopNavbar></TopNavbar>
    <h1>Keep a track of your health!</h1>
    <div className='content'>
    
       <HydrationTracker />
      <RecipeAnalyzer />
    </div>
    </div>
   
  );
};

export default NutritionTrackerMom;
