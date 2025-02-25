import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { TbSquareRoundedArrowLeftFilled, TbSquareRoundedArrowRightFilled } from 'react-icons/tb';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  scales: {

    x: {
      ticks: {
        font: {
          size: 8, // Change the font size here
        },
      },
    },
  },
  plugins: {
    legend: {
      position: 'top',
      display: false,
    },

  },
};

const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday'];
const colors = [
  'rgb(0, 2, 161)',
  'rgb(239, 67, 57)',
  'rgb(199, 10, 128)',
  'rgb(217, 217, 217)',
  'rgb(62, 199, 11)',
  'rgb(255, 234, 32)',
  'rgb(252, 41, 71)',
  'rgb(62, 100, 255)',
  'rgb(244, 115, 64)',
  'rgb(254, 205, 26)',
];

export const data = {
  labels,
  datasets: [
    {
      label: 'Last 10 days Trips ',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: colors,
    },

  ],

};

export function WeeklyBarChart() {
  return (
    <>
    <div>
    <div className="flex gap-7 w-34 p-1.5 rounded-lg bg-[#00adb5] shadow-md">
      <div className="cursor-pointer">
        <TbSquareRoundedArrowLeftFilled className="text-white text-2xl" />
      </div>
      <span className="uppercase text-sm font-semibold text-white font-sf_bold">
        
      </span>
      <div className="cursor-pointer">
        <TbSquareRoundedArrowRightFilled className="text-white text-2xl" />
      </div>
    </div>
      </div>
      <Bar options={options} data={data}
      />
    </>
  );
}
