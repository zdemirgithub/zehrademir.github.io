import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

// Register the required components for Chart.js
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const Chart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue ($)',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Monthly Revenue',
      },
    },
  };

  return (
    <section id="chart" className="py-16 px-8 bg-gradient-to-r from-green-400 to-blue-500">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Dynamic Chart</h2>
        <Line data={data} options={options} />
      </div>
    </section>
  );
};

export default Chart;
