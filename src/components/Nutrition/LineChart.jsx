// LineChart.jsx

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS} from "chart.js/auto"

const LineChart = ({ statusData })  => {
    const data = {
      ...statusData
      // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      // datasets: [
      //   {
      //     label: 'the blue thing',
      //     data: [69, 67, 78, 68, 59, 79], // Mock status data
      //     backgroundColor: 'rgba(75,192,192,0.4)',
      //     borderColor: 'rgba(75,192,192,1)',
      //     borderWidth: 1,
      //   },
      // ]
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
          beginAtZero: true,
          // max: 100
        }
      }
    };
  
    // const ctx = document.getElementById("line1").getContext("2d");
    // const myChart = new ChartJS(ctx, {
    //   type: "line",
    //   data: {
    //     // Your chart data here
    //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    //   datasets: [
    //     {
    //       label: 'the blue thing',
    //       data: [69, 67, 78, 68, 59, 79], // Mock status data
    //       backgroundColor: 'rgba(75,192,192,0.4)',
    //       borderColor: 'rgba(75,192,192,1)',
    //       borderWidth: 1,
    //     },
    //   ]
    //   },
    //   options: {
    //     // Your chart options here
    //     scales: {
    //       x: {
    //         title: {
    //           display: true,
    //           text: 'Month'
    //         }
    //       },
    //       y: {
    //         title: {
    //           display: true,
    //           text: 'Value'
    //         },
    //         beginAtZero: true,
    //         // max: 100
    //       }
    //     }
    //   },
    // });

    return (
      <div>
        <Line data={data} options={options} />
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
