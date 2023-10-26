import {memo} from 'react'
import {Line} from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

const colors = [
  'rgb(255, 99, 132)',
  'rgb(75, 192, 192)',
  'rgb(54, 162, 235)',
  'rgb(255, 205, 86)',
  'rgb(150, 150, 240)',
]

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

export interface ChartProps {
  title: string
  labels: string[],
  datasets: {
    label: string,
    data: number[],
  }[]
}

const Chart = memo(({title, labels, datasets}: ChartProps) => {
  const chartOptions = {...options};
  chartOptions.plugins.title.text = title;

  const data = {
    labels,
    datasets: datasets.map((dataset, index) => ({
      ...dataset,
      borderColor: colors[index % 4],
      backgroundColor: `rgba(${colors[index % 4]}, 0.5)`,
    }))
  }

  return (
    <Line options={chartOptions} data={data} />
  )
})

export default Chart
