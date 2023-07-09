//----------------------------------------------------------------
import React from 'react';
import { Bar } from 'react-chartjs-2';
import ChartJS from 'chart.js/auto';
import { faker } from '@faker-js/faker'
import { ChartWrapper, Header1 } from "./styles";
import { darkBlue, darkGreen, darkRed } from "./styles/colors";

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Analytics Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'];

const data = {
  labels,
  datasets: [
    {
      label: 'Expense',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 10000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Balance',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 10000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Income',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 10000 })),
      backgroundColor: 'rgba(0, 128, 0, 0.5)',
    },
  ],
};

export function Analytics() {
  return (
    <ChartWrapper>
      <Header1>Analytics</Header1>
      <Bar options={options} data={data} />
    </ChartWrapper>
  );
}
