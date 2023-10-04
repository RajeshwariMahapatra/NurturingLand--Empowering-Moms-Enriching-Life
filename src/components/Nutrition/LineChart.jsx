// LineChart.jsx

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS} from "chart.js/auto"

const LineChart = ({ statusData })  => {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {statusData}
      ]
    };
  
    const options = {
      scales: {
        x: {
          title: {
            display: true,
            text: 'Month'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Value'
          },
          beginAtZero: true
        }
      }
    };
  
    return (
      <div>
        <Line data={statusData} options={options} />
      </div>
    );
  };


// const LineChart = ({ statusData }) => {
//   return (
//     <Line
//       data={statusData}
//       options={{
//         scales: {
//           xAxes: [{
//             type: 'category', // Ensure you use the category scale for X-axis
//             ticks: {
//               beginAtZero: true,
//               max: 100,
//             },
//           }],
//           yAxes: [{
//             ticks: {
//               beginAtZero: true,
//               label:"Calories"
//             },
//           }],
//         },
//       }}
//     />
//   );
// };

export default LineChart;
