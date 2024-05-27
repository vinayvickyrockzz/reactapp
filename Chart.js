import React from 'react';
import { Bar } from 'react-chartjs-2';

const Chart = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Temperature (°C)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: data.values,
      },
    ],
  };

  const chartOptions = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        },
      }],
    },
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Weekly Temperature Chart</h2>
      <Bar
        data={chartData}
        options={chartOptions}
      />
    </div>
  );
};

export default Chart;


