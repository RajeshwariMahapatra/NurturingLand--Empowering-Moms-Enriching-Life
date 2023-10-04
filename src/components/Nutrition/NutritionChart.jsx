// NutritionChart.jsx

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS} from "chart.js/auto"

const NutritionChart = ({ statusData }) => {
  return (
    <Bar
      data={statusData}
      options={{
        scales: {
          x: {
            beginAtZero: true,
            max: 100,
          },
        },
      }}
    />
  );
};

export default NutritionChart;
